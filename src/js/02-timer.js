import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const formInput = document.querySelector('#datetime-picker')
const value = document.querySelectorAll('.value')
const btnToStart = document.querySelector('button[data-start]')

let currentDate = new Date();
let selectedDate = new Date();
let countDate = {};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
    selectedDate = selectedDates[0]
    
        if (selectedDate < currentDate) {
            const finalDate = [addLeadingZero(selectedDate.getUTCDate()), addLeadingZero(selectedDate.getUTCMonth() + 1)]
            console.log(finalDate[0] + '.' + finalDate[1]);

        btnToStart.disabled = false
        } else {
         Notiflix.Notify.failure('Будь ласка, оберіть дату в минулому');
    }
  },
};

flatpickr(formInput, options)

btnToStart.addEventListener('click', e => {
    
}) 

function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
}

// function createInput 