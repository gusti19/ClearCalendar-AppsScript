function delete_events()
{
    var calendarName = 'Jadwal Sem. 4';
    // for month 0 = Jan, 1 = Feb etc
    // below delete from Jul 13 2020 to Jul 18 2020
    var fromDate = new Date("2024-05-6"); 
    var toDate = new Date("2024-05-18");
    var calendar = CalendarApp.getCalendarsByName(calendarName)[0];
    var events = calendar.getEvents(fromDate, toDate);
    for(var i=0; i<events.length;i++){
        var ev = events[i];
        {
        // show event name in log
        Logger.log(ev.getTitle()); 
        ev.deleteEvent();
        }
}
}
