import React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

function Schedule() {
  const data = [{
    Id: 1,
    Subject: 'Scrum Meeting',
    Location: 'Office',
    StartTime: new Date(2022, 0, 1, 9, 30),
    EndTime: new Date(2023, 0, 1, 10, 30),
    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;INTERVAL=1'
  }];

  return (
    <div>
      <ScheduleComponent height='650px' eventSettings={data}>
        <ViewsDirective>
          <ViewDirective option='Day' />
          <ViewDirective option='Week' />
          <ViewDirective option='WorkWeek' />
          <ViewDirective option='Month' />
          <ViewDirective option='Agenda' />
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
}

export default Schedule;
