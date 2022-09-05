import { useState, useEffect } from "react";




const useCart = () => {
  const [selectedPackage, setSelectedPackage] = useState([]);

  useEffect(() => {
    const cart = getCart();
    setSelectedPackage(cart);
  }, []);

  function getCart() {
    let cart;
    const isHave = localStorage.getItem("cart");
    if (isHave) {
      cart = JSON.parse(isHave);
    } else {
      cart = [];
    }
    return cart;
  }



  function addToCart(packages) {
    const isHave = selectedPackage.find((selected) => selected.key === packages.key);
    if (isHave) {
     
    }
    else {
      const newSelection = [...selectedPackage, packages];
      localStorage.setItem('cart', JSON.stringify(newSelection));
      setSelectedPackage(newSelection);


    }


  }

  function remove(key) {
    const selectAfterRemove = selectedPackage.filter(
      (course) => course.key !== key
    );
    const proceed = window.confirm('Are you sure to remove?')
    if (proceed) {
      localStorage.setItem("cart", JSON.stringify(selectAfterRemove));
      setSelectedPackage(selectAfterRemove);
    }
  }


  return { setSelectedPackage, remove, addToCart, selectedPackage };
};

export default useCart;