<script>
  export let todo;
</script>

<div class="todo">
  <input type="checkbox" />
  <div class="todo__content">{todo.content}</div>
</div>

<style>
  .todo {
    display: flex;
  }

  .todo__content {
    margin-left: 15px;
  }
</style>
