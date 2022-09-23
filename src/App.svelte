<script>
  import ToDoItem from './components/ToDoItem.svelte';
  import TopPanel from './components/TopPanel.svelte';

  let day = 'Today';
  let todos = [
    {
      content: 'Build a todo app',
      completed: false
    },
    {
      content: 'Make it good',
      completed: false
    }
  ];
</script>

<main>
  <TopPanel {day} />
  <div class="todo__list">
    {#each todos as todo}
      <ToDoItem {todo} />
    {/each}
  </div>
</main>

<style>
  main {
    padding: 20px 15px;
  }

  .todo__list {
    margin-top: 25px;
  }
</style>
