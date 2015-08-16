<?php

class Client_Cart_CartController extends Mage_Core_Controller_Front_Action
{

  /**
   * Return response object
   *
   * @return Varien_Object
   */
  protected function _prepareResponseObject()
  {
      $responseObject = new Varien_Object();

      $responseObject->setStatus(false);
      $responseObject->setResponse(null);
      $responseObject->setMessage(null);

      return $responseObject;
  }

  private function _prepareCart()
  {
    $quote = Mage::getSingleton('checkout/session')->getQuote();
    $cartItems = $quote->getAllVisibleItems();
    $cart = [];

    foreach ($cartItems as $item) {
      $product = $item->getProduct();
      $cartItem = [];
      $cartItem['id'] = $item->getId();
      $cartItem['updated'] = $item->getUpdatedAt();
      $cartItem['qty'] = $item->getQty();
      $cartItem['name'] = $item->getName();
      $cartItem['price'] = $item->getPrice();
      $cartItem['image'] = (string)Mage::helper('catalog/image')->init($item->getProduct(), 'thumbnail')->resize(100);
      $cartItem['url'] = $product->getUrlModel()->getUrl($product);
      $cartItem['productId'] = $product->getId();
      $cart[] = $cartItem;
    }

    return $cart;
  }
  public function addToCartAction()
  {
    $responseObject = $this->_prepareResponseObject();
    if(!!$request = Mage::app()->getRequest()->getPost()) {
      $id = $request['id'];
      $qty = $request['qty'];
      $_product = Mage::getModel('catalog/product')->load($id);
      $cart = Mage::getModel('checkout/cart');
      $cart->init();
      $cart->addProduct($_product, array('qty' => $qty));

      // Save Product to cart
      $cart->save();
      Mage::getSingleton('checkout/session')->setCartWasUpdated(true);

      $responseObject->setResponse($this->_prepareCart());
      $responseObject->setStatus(true);

      return $this->getResponse()->setHeader('Content-type', 'application/json')
          ->setBody($responseObject->toJSON());
    }
  }

}