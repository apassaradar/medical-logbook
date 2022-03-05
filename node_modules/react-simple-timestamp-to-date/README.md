# react-simple-timestamp-to-date
Simple utility convert timestamps and date strings to desired human readable format

## Installation
### $ npm i react-simple-timestamp-to-date

## How to use in your react component ?
### Import it to your component
```
import SimpleDateTime  from 'react-simple-timestamp-to-date';
```
## Use the SimpleDateTime tag to get the date
```
<SimpleDateTime>{1588111492}</SimpleDateTime>
```

### Props()

**dateSeparator** : Symbol or text will act as the date separator. Default blank space.

**timeSeparator**: Symbol or text will act as the time separator. Default blank space.

**dateFormat**: Formats the dates Position. Default (Y m d). Possible values ('DMY', 'MDY', 'MYD'). If not matched then default (Ymd will be rendered).

**timeFormat**: Formats the dates Position. Default (H M S). Possible values ('HMS', 'HSM', 'MHS', 'MSH', 'SMH', 'SHM'). If not matched then default (Ymd will be rendered).

**showTime**: Displays time if set to 1. Default 1. if set to zero time will not be displated ()

**showDate**: Displays date if set to 1. Default 1. if set to zero date will not be displated ()

**(NOTE): If both are set to false, default date format will be shown

**meridians**: Displays time in 12 Hrs Format if set to 1. Default 0.

# Code Examples for JSX
```
import React, { Fragment } from 'react';
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import ReactDOM from 'react-dom';

ReactDOM.render(
   <Fragment>
      <p>
         <b>Previous Date Time:  </b>
         <SimpleDateTime format="DMY">{1588111492}</SimpleDateTime>
      </p>
      {/* Previous Date Time: 2020 04 29 3 34 52 from timestamp*/}

      <p>
         <b>Current Date Time:  </b>
         <SimpleDateTime dateSeparator="/" timeSeparator="-" format="YMD">{new Date()}</SimpleDateTime>
      </p>
      {/* Current Date Time: 2020/04/29 12-24-13 */}

      <p>
         <b>String to Date Time:  </b>
         <SimpleDateTime dateSeparator="-" format="MYD" timeSeparator=":" meridians="1">{'2020-04-19 22:03:44'}</SimpleDateTime>
      </p>
      {/*String to Date Time: 2020-04-19 10:03:44 pm*/}
      <p>
         <b>String to Date Time:  </b>
         <SimpleDateTime dateSeparator="-" format="MYD" showTime="0">"2015-03-25"</SimpleDateTime>
      </p>
      {/* String to Date: 2015-03-25 */}
      {/** If both are showTime and showDate are 0  then it will return the complete date time*/}
      <p>
         <b>String to Date:  </b>
         <SimpleDateTime dateSeparator="-" format="MYD" showTime="0">"2015-03-01"</SimpleDateTime>
      </p>
      {/* String to Date: 2015-03-25 */}
      {/** If both are showTime and showDate are 0  then it will return the complete date time*/}
      
      <p>
         <b>Fetch Only Time:  </b>
         <SimpleDateTime timeSeparator=":" format="MYD" showTime="1" showDate="0" meridians="1">{new Date()}</SimpleDateTime>
      </p>
      {/* Fetch Only Time: 12:24:13 pm */}
      {/** If both are false then it will return the complete date time */}
   </Fragment>
   , document.getElementById("root"));   
```

# code example for Js
```
import SimpleDateTime  from 'react-simple-timestamp-to-date';
var dateTimeProperties = {'dateSeparator': '-', 'format':'YMD', 'showTime':'1', 'children': "2015-03-01"}
console.log(SimpleDateTime(dateTimeProperties))
```
