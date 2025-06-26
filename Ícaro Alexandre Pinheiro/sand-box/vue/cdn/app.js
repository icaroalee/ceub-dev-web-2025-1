const meuAppVue = {
  data() {
    return {
      nome: "Fernando Dias",
      idade: 39,
      inputText: "",
    };
  },
};

Vue.createApp(meuAppVue).mount("#app");
