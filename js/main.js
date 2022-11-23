const { createApp } = Vue;

 const app = createApp({
  data() {
    return {
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
              addTask() {
                this.taskList.push({
                  text: this.newTaskData.text,
                  completed: false,
                });
              },
    
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
