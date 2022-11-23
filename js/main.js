const { createApp } = Vue;

 const app = createApp({
  data() {
    return {
      // array elementi task
      taskList: [
        {
          text: "task1",
          completed: true,
        },
        {
          text: "task2",
          completed: true,
        },
        {
          text: "task3",
          completed: true,
        },
      ],
      newTaskData: {
        text: "",
        completed: "",
      },
    };
       
    },
     methods: {
        // funzione per aggiungere nuovo task alla lista
              addTask() {
                this.taskList.push({
                  text: this.newTaskData.text,
                  completed: false,
                });
              },
              // funzione per eliminare il task
              deleteItem(i) {
                const confirmed = confirm(
                  "Sei sicuro di voler eliminare l'elemento?"
                );
                if (confirmed) {
                  this.taskList.splice(i, 1);
                }
              },
            },
  
}).mount("#app");
