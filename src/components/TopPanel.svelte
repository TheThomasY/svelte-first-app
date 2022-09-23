<script>
  import { getTodaysDate } from '../utils/index';

  export let day;

  const { date: todaysDate, month: todaysMonth } = getTodaysDate();
</script>

<div class="topPanel">
  <div class="date">
    <div class="calendar-icon">
      <div class="calendar-icon__month">
        <div class="calendar-icon__month__text">{todaysMonth}</div>
      </div>
      <div class="calendar-icon__date">{todaysDate}</div>
    </div>
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
    align-items: center;
  }

  .calendar-icon {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid #3d82eb;
    border-radius: 10px;
    font-weight: 700;
  }

  .calendar-icon__month {
    width: 100%;
    height: 20px;
    color: white;
    background-color: #3d82eb;
    border: 3px solid #3d82eb;
    font-size: 12px;
    text-transform: uppercase;
    position: relative;
  }

  .calendar-icon__month__text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .calendar-icon__date {
    text-align: center;
    color: #3d82eb;
  }

  .day-description {
    margin-left: 15px;
    font-size: 24px;
    font-weight: 700;
  }

  .options {
    border: none;
    background: none;
  }
</style>
