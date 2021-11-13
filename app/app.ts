import { NegociacaoController } from "./controllers/NegociacaoController.js";

const form = document.querySelector('.form');
const controller = new NegociacaoController();

form.addEventListener('submit', event => {
  event.preventDefault();
  controller.adiciona();
});
