import React from 'react';
import PropTypes from 'prop-types';
import Date from '../Date/Date';
import { 
  Wrapper, 
  DateAndButtonWrapper,
  ArrowButton,
  DaysOfTheWeek,
  CalendarGrid,
  Month,
} from './CalendarStyles';

const Calendar = ({
  firstDayPosition,
  daysUnav,
  daysInMonth,
  currentYear,
  currentMonth,
  currentYearMonth,
  incrementCalendar,
  decrementCalendar,
  selectedCheckInDate,
  selectedCheckOutDate,
  selectDate,
  toggleCalendar,
}) => {
  const firstBlankDates = Array.from(Array(firstDayPosition).keys())
    .map(day => <Date key={day} day={0} status="blank" />);

  const monthDates = Array.from(new Array(daysInMonth), (val, index) => index + 1)
    .map((day) => {
      if (daysUnav.indexOf(day) === -1) {
        return (
          <Date
            key={day}
            day={day}
            status="available"
            selectDate={selectDate}
            year={currentYear}
            month={currentMonth}
            toggleCalendar={toggleCalendar}
          />
        );
      }
      return <Date key={day} day={day} status="unavailable" />;
    });
    
  return (
    <Wrapper>
      <DateAndButtonWrapper>
        <ArrowButton id="back" type="button" onClick={() => decrementCalendar()}>
          <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyLjYzNSAzMi42MzUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyLjYzNSAzMi42MzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KPGc+Cgk8cGF0aCBkPSJNMzIuMTM1LDE2LjgxN0gwLjVjLTAuMjc2LDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41LDAuNS0wLjVoMzEuNjM1YzAuMjc2LDAsMC41LDAuMjI0LDAuNSwwLjUgICBTMzIuNDExLDE2LjgxNywzMi4xMzUsMTYuODE3eiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTEzLjAzNywyOS4zNTNjLTAuMTI4LDAtMC4yNTYtMC4wNDktMC4zNTQtMC4xNDZMMC4xNDYsMTYuNjY5QzAuMDUzLDE2LjU3NSwwLDE2LjQ0OCwwLDE2LjMxNXMwLjA1My0wLjI2LDAuMTQ2LTAuMzU0ICAgTDEyLjY4NCwzLjQyOWMwLjE5NS0wLjE5NSwwLjUxMi0wLjE5NSwwLjcwNywwczAuMTk1LDAuNTEyLDAsMC43MDdMMS4yMDcsMTYuMzE1bDEyLjE4NCwxMi4xODRjMC4xOTUsMC4xOTUsMC4xOTUsMC41MTIsMCwwLjcwNyAgIEMxMy4yOTMsMjkuMzA0LDEzLjE2NSwyOS4zNTMsMTMuMDM3LDI5LjM1M3oiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
        </ArrowButton>
        <Month><strong>{currentYearMonth}</strong></Month>
        <ArrowButton id="forward" type="button" onClick={() => incrementCalendar()}>
          <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyLjYzNSAzMi42MzUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyLjYzNSAzMi42MzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KPGc+Cgk8cGF0aCBkPSJNMzIuMTM1LDE2LjgxN0gwLjVjLTAuMjc2LDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41LDAuNS0wLjVoMzEuNjM1YzAuMjc2LDAsMC41LDAuMjI0LDAuNSwwLjUgICBTMzIuNDExLDE2LjgxNywzMi4xMzUsMTYuODE3eiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTE5LjU5OCwyOS4zNTNjLTAuMTI4LDAtMC4yNTYtMC4wNDktMC4zNTQtMC4xNDZjLTAuMTk1LTAuMTk1LTAuMTk1LTAuNTEyLDAtMC43MDdsMTIuMTg0LTEyLjE4NEwxOS4yNDQsNC4xMzYgICBjLTAuMTk1LTAuMTk1LTAuMTk1LTAuNTEyLDAtMC43MDdzMC41MTItMC4xOTUsMC43MDcsMGwxMi41MzcsMTIuNTMzYzAuMDk0LDAuMDk0LDAuMTQ2LDAuMjIxLDAuMTQ2LDAuMzU0ICAgcy0wLjA1MywwLjI2LTAuMTQ2LDAuMzU0TDE5Ljk1MSwyOS4yMDZDMTkuODU0LDI5LjMwNCwxOS43MjYsMjkuMzUzLDE5LjU5OCwyOS4zNTN6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
        </ArrowButton>
      </DateAndButtonWrapper>
      <DaysOfTheWeek>
        <div>Su</div>
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
      </DaysOfTheWeek>
      <CalendarGrid className="calendar">
        {firstBlankDates}
        {monthDates}
      </CalendarGrid>
    </Wrapper>
  );
};

Calendar.propTypes = {
  daysUnav: PropTypes.arrayOf(PropTypes.number).isRequired,
  firstDayPosition: PropTypes.number.isRequired,
  daysInMonth: PropTypes.number.isRequired,
  currentYear: PropTypes.number.isRequired,
  currentMonth: PropTypes.number.isRequired,
  currentYearMonth: PropTypes.string.isRequired,
  incrementCalendar: PropTypes.func.isRequired,
  decrementCalendar: PropTypes.func.isRequired,
  selectedCheckInDate: PropTypes.string.isRequired,
  selectedCheckOutDate: PropTypes.string.isRequired,
  selectDate: PropTypes.func.isRequired,
  toggleCalendar: PropTypes.func.isRequired,
};

export default Calendar;
