import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import SimpleDateTime from './utilities/utilities';

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