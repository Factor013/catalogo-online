import React, { useContext }  from 'react';
import './ButtonPedido.css';
import ContextApp from '../../context/ContextApp';
import formatCurrency from '../../api/formatCurrency';

function ButtonPedido() {

  const { cartItens } = useContext(ContextApp);

  const realizarPedido = () => {
    const formattedItems = cartItens.map((cartItem) => {
      return `☕ ${cartItem.title} - R$ ${formatCurrency(cartItem.price)}\n`;
    }).join('\n');

    const total = cartItens.reduce((acc, item) => acc + item.price, 0);
    const message = `Olá! Gostaria de realizar meu pedido:\n\n${formattedItems}\nTotal: R$ ${formatCurrency(total)}\n\nConfirma o pedido?`;

    const encodedMessage = encodeURIComponent(message);
    const link = `https://api.whatsapp.com/send?phone=5535991554699&text=${encodedMessage}`;

    window.open(link, '_blank');
  };

  return (
    <div className="pedido">
      <button className="button-pedido" onClick={realizarPedido}>
        Realizar Pedido
      </button>
    </div>
  );
}

export default ButtonPedido;

