require('colorized-console');
class TicketManager {
  #events;
  #id = 0;
  #basePrice = 10;
  constructor() {
    this.#events = [];
  }

  addEvent = (nome, lugar, preco, capacidade = 50, data) => {
    this.#id = this.#id + 1;
    const event = {
      id: this.#id,
      nome,
      lugar,
      preco: this.#basePrice + preco,
      capacidade,
      data: data ?? `${new Date().getDate()}/${new Date().getMonth() + 1}`,
      participants: [],
    };

    this.#events.push(event);
  };
  getEvents = () => this.#events;

  getEvent =  (index) => this.#events[index];


  addUser = (idEvent, idUser) => {
    const index = this.#events.findIndex((event) => event.id === idEvent);
    console.log(index);

    if (this.#events[index] === undefined) {
      console.error("Evento nao encontrado");
      return false;
    }
    const particiantExists = this.#events[index].participants.includes(idUser);
    if (!particiantExists) {
      this.#events[index].participants.push(idUser);
    }
    // console.log(this.#events[index].participants);
  };

  putEventoEnGira = (idEvent, novaCidade, novaData) => {
    this.#id = this.#id + 1;
    const index = this.#events.findIndex((event) => event.id === idEvent);
    console.log(index);
    if (this.#events[index] === undefined) {
      console.error("Evento nao encontrado");
      return false;
    }
    const newEvent = {
        ...this.#events[index],
        id: this.#id,
        lugar: novaCidade,
        data: novaData ?? new Date().toLocaleString("BR"),
        participants: [],
      };
      
      this.#events.push(newEvent);
  };
}

const evento = new TicketManager();
console.log(evento.getEvents()); // []
evento.addEvent("Rock in Rio", "Lisboa", 10, 40, "10/10"); // id = 1 index: 0
// console.log(evento.getEvents());
evento.addUser(1, 1);
// console.log(evento.getEvents());
evento.addUser(1, 1);
// console.log(evento.getEvents());
evento.addUser(1, 2);
console.log(evento.getEvents());
// evento.putEventoEnGira(1, "Porto", "11/11"); // id = 2 index: 1
// console.log(evento.getEvents());
evento.putEventoEnGira(4, "Braga", "12/12"); 