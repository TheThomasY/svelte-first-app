<script>
  import { formatOrdinalDate } from '../utils/index';

  export let day;

  const today = new Date();
  const todaysOrdinalDate = formatOrdinalDate(today);
</script>

<div class="topPanel">
  <div class="date">
    <div class="calendar">{todaysOrdinalDate}</div>
    <div class="day-description">{day}</div>
  </div>
  <button class="options">...</button>
</div>

<style>
  .topPanel {
    display: flex;
    justify-content: space-between;
  }

  .date {
    display: flex;
    justify-content: space-between;
  }

  .day-description {
    margin-left: 10px;
  }
</style>
