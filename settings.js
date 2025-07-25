require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIALgU+VoX3zOkyQQAAAkJAAAKAAAAY3JlZHMuanNvbr1Va4+iSBT9L*VVM*J+mHSyPJW2UXxB62Y*FFBgKS+LQsWJ*32Dds90MrMzvclm+VRUwb3n3HvOra+gKHGNJqgFw6+gIvgEKeqWtK0QGAK9SRJEQB*EkEIwBO7UGK2MZsVGWCkEpal682Zpnl9rmG8qixonurRYnucdq3wCtz6omjDD0S8CBogbzfTzJccmytkWTg*heDW4eLTo8ZOmneWOFSSvipqehSdw6yJCTHCRWtUO5YjAbIJaD2LyOfgHY0DT9Hrau7a*SLa5eeRg7LjK0c8KIg7G2rJ62bGbQLEOn4Pvceu1jNx8OhflNBSNea4v5lFmMyfGyKr19Aqf*ZF83qLiDX6N0wLFTowKimn76brDkRgG+6DRzIGh7myuFJ1eJJy42aEV7UKJzUO032bWwvTdzwEnslvos4uc1W25MJR4YPtjzz5Kij5L6oPqzOcbs12wY6ZNPwL3yLtWDv+m7svZ6zTz01Nz8Wy8DbWAaMbgtDyURu9SWL44i2eTRB2hlb*+HPw2J+Y62YRzvXcgwtaIi8KI5zC2zGuDR2WwgdPDxU3l+hJ9hw9pQ36FUm337n6OL1JaYg9dne3c9cVevYOZ0lZ2WBdrfkMy19lcg96LnJRn+bBf127gah7dsG6zfVkGKfKjI6f03MsJi*bU0s5Pd0YH1DoxGLK3PiAoxTUlkOKyuO8pah*A+LREEUH0Xl5wVMXpZR8+S816LI4bPrEhEXfpdp3i6vpsySE*YyYLJauVzRPog4qUEaprFI9xTUvSuqiuYYpqMPzz3qmONEF5SdEzjsEQcDzPiTIjM6wq*VF*Oe8grWFVfSkQBX2QkDJ3ERhS0qA+uP*AyoKmKZIk2apkCaZgMjzPGSKvy4KsKDzTUcwfSVc4RzWFeQWGrCzyAssyknDr*zc4DJ1XBEEwJcHmLInldI4xJZ7RTI1jTEOU*y8cLK*pgsYpnMZZosLpsqGIDG+zPCMIvMbbv8Eh3f7qgwJd6MNPnQp4tg8STGq6LpoqK2H8brb3QxhFZVPQZVtERrdABAw*bCNKcZHWHbOmgCTa4RMyOh5gmMCsRt+EhwiK37m8DVOjjDs*rCTblSbuK+iwd4F+qM2QFX4sT*aoiMgLoirxgsgpnMR1X3YHt28Iu4AxohBnddfI6TFme4pteWaIlflopFmpZqQa+M7o3bEPR4z80fgVTzn77DeuoBoL6JWlUfjFxpzIV2Yt7PxdNUjS3kV5+kmQDqGLRQ4zqly6huAf3fnqupVEyVm6Rp6O9UDRztX6BBnxZantj3kCW8ocJ*LzOjMy0uphk1xnurOfoFJxN810e46Ohp4+ddlidMIR+pjMl2deEEznUTi*CmPNp5F7Dl7VZ43GvE2DyUuYS0yolmZEZz0i8lteDOrJIFl5+2vU6xlaa660tZqVrhqrpSRjLRHNt1lyn2XZ2x2C31yO768JRveRXMCug7*v3QN4JzHm1v8Q423I*8Og1BfZYscK+3gX2eF+5s0PwV6aaBW75bS2UVR75vgbmPCCVyfg1mm9yiBNSpJ3V1kRkxLHoA9I2XSadYqk*EUyQ3McK30wz2BNte8++Im1RPXxlUfKagzrHRgCPvXWz4dO1K1WVUsK6butgNY9E+qC299QSwECFAMUAAAICAC4FPlaF98zpMkEAAAJCQAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAADxBAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233257070196',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'napatelpro',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with thCYPHER-X:~UEsDBBQAAAgIAFZ8+FojMePDrAQAAH0IAAAKAAAAY3JlZHMuanNvbq1Ua4+iSBT9L*UVM4I8NelkAHkKiqJ025v9UEKJ1c3LogBx4n*fYHfPTDK7s73J8qm4FPeee+459xsoSlyjBerB7BuoCG4hRcOR9hUCM6A1xyMiYAQSSCGYgYm9sKbo7K9fGVV9lKwyZOxwigrPKtz50otsR8kJK4fdo*oAbiNQNYcMx79JmG5UGtg70p5IvLtE+GAmj6vOjZUMyR59cadXnQ+4rqHF6wO4DRkhJrhIjeqEckRgtkB9ADH5HPzHIC+x7x8PrVREGnQ4r*ZChcxNRVY2p4MRH*n8ovGrl4nzOfht2yjm8vpYwo01PahFajMX01HcMg*yZ5NJUNXFK2gsO1y*wa9xWqDESVBBMe0*zfvakwLOM4Vx2WSXOHTU0HpmrIZrTOGFMIect5VT86ps5NdPAi9PmWZt*Clf7BfotIerSDJbtlvOyQktURetzr1RxeMJb7M*Aw*Ih1Ze*wvviqvoPX66KDYRnDFvyAynelX3vMge9f6gZKd+rUse7p6i8nPwE6gp2WSsOnzy3EOOueyScShuEmVa+uzJvoShS7vDygz58gd8SBvyO5SdHrlxuo3cHpkT*TVsgrEc2KlXtd14v3F9jZes9qUS9PrZsNyOGE1qjBfTeNzy9TUJzkJUe+eANQ6bLNYzvdPpITp1D*eOXlHvJGDG3UaAoBTXlECKy2KITYURgEkbopggemcXCM8WK0aTzXQllMxF4F1fjZQ0OjJ8lp8vmshETWudU7VN9g9gBCpSxqiuUWLjmpak91FdwxTVYPbHfVBDzwTlJUUuTgYX8*xElGRJ5Fjha*2lO0Faw6r6UiAKRuBIytxHYEZJg0bg7Yc5pymixMpzVdFkQzM0mRNZyWR1SePnynToMH8rusU5qinMKzDjZJHnZW4iT2+j*weHqGumqEsSLyqKKXMiL+qmOhGF6XSuTMyJ+q84*hyBAl3om4wH8nluBI6Y1HRXNFVWwuRD4x8fYRyXTUHDvoj14YAImP0URpTiIq2HzpoCkviEW6QPfYDZEWY1+j5vRFDy0cv7DtPLZJDhcstNFG2hgQH7kOgXbmb8r+xk91scJ0xZhROnLC9Lgjzjvw7x23d8Q7oEUYizGsyAvszzPHBsw8kzHK8tSzVSVU9V8KOfD5u86fDpPJabXWiuWF0+MOMu2gaOU7rXHJ3dINTktSzUXdBjdlhvvyYBM+CvzD3SrlebDS4HqU3Ocw*v5sX86m8XqjEhxtMqxuU1sYkyN6K54qeHFzvZXlax5Tv1uHTD*URpU+TWL9sdXGzMRhrr6sNQLUEtjtHPxbJz4qkoZNZLOD1o3hEL5wXzWq4LvCkz*+CrF2WTh*uqNc4Lj4NrQiVCjnsdPm54MdEEh7ls5L21ehKOfr*G7SreFi*vBr4vkOx9ceN3b+H76xGj+x4s4DC*f53cG+5BX+xt9FOK98X6D8tJi6SWkTPjtKVqMxm3irm79vpCj8XijLdsitgV4*lzpaQOAbdB6FUG6bEkOZgBWCSkxAkYAVI2g2Cd4lj+ppiuOc6d5dsIZLCm6g8T*J2vpLdbASkrG9angQNLUPNmUHSvVlVIIf3wFFCHJ+BscPsLUEsBAhQDFAAACAgAVnz4WiMx48OsBAAAfQgAAAoAAAAAAAAAAAAAAICBAAAAAGNyZAAH0IAAAKAAAAY3JlZHMuanNvbq1Ua4+iSBT9L*UVM4I8NelkAHkKiqJ025v9UEKJ1c3LogBx4n*fYHfPTDK7s73J8qm4FPeee+459xsoSlyjBerB7BuoCG4hRcOR9hUCM6A1xyMiYAQSSCGYgYm9sKbo7K9fGVV9lKwyZOxwigrPKtz50otsR8kJK4fdo*oAbiNQNYcMx79JmG5UGtg70p5IvLtE+GAmj6vOjZUMyR59cadXnQ+4rqHF6wO4DRkhJrhIjeqEckRgtkB9ADH5HPzHIC+x7x8PrVREGnQ4r*ZChcxNRVY2p4MRH*n8ovGrl4nzOfht2yjm8vpYwo01PahFajMX01HcMg*yZ5NJUNXFK2gsO1y*wa9xWqDESVBBMe0*zfvakwLOM4Vx2WSXOHTU0HpmrIZrTOGFMIect5VT86ps5NdPAi9PmWZt*Clf7BfotIerSDJbtlvOyQktURetzr1RxeMJb7M*Aw*Ih1Ze*wvviqvoPX66KDYRnDFvyAynelX3vMge9f6gZKd+rUse7p6i8nPwE6gp2WSsOnzy3EOOueyScShuEmVa+uzJvoShS7vDygz58gd8SBvyO5SdHrlxuo3cHpkT*TVsgrEc2KlXtd14v3F9jZes9qUS9PrZsNyOGE1qjBfTeNzy9TUJzkJUe+eANQ6bLNYzvdPpITp1D*eOXlHvJGDG3UaAoBTXlECKy2KITYURgEkbopggemcXCM8WK0aTzXQllMxF4F1fjZQ0OjJ8lp8vmshETWudU7VN9g9gBCpSxqiuUWLjmpak91FdwxTVYPbHfVBDzwTlJUUuTgYX8*xElGRJ5Fjha*2lO0Faw6r6UiAKRuBIytxHYEZJg0bg7Yc5pymixMpzVdFkQzM0mRNZyWR1SePnynToMH8rusU5qinMKzDjZJHnZW4iT2+j*weHqGumqEsSLyqKKXMiL+qmOhGF6XSuTMyJ+q84*hyBAl3om4wH8nluBI6Y1HRXNFVWwuRD4x8fYRyXTUHDvoj14YAImP0URpTiIq2HzpoCkviEW6QPfYDZEWY1+j5vRFDy0cv7DtPLZJDhcstNFG2hgQH7kOgXbmb8r+xk91scJ0xZhROnLC9Lgjzjvw7x23d8Q7oEUYizGsyAvszzPHBsw8kzHK8tSzVSVU9V8KOfD5u86fDpPJabXWiuWF0+MOMu2gaOU7rXHJ3dINTktSzUXdBjdlhvvyYBM+CvzD3SrlebDS4HqU3Ocw*v5sX86m8XqjEhxtMqxuU1sYkyN6K54qeHFzvZXlax5Tv1uHTD*URpU+TWL9sdXGzMRhrr6sNQLUEtjtHPxbJz4qkoZNZLOD1o3hEL5wXzWq4LvCkz*+CrF2WTh*uqNc4Lj4NrQiVCjnsdPm54MdEEh7ls5L21ehKOfr*G7SreFi*vBr4vkOx9ceN3b+H76xGj+x4s4DC*f53cG+5BX+xt9FOK98X6D8tJi6SWkTPjtKVqMxm3irm79vpCj8XijLdsitgV4*lzpaQOAbdB6FUG6bEkOZgBWCSkxAkYAVI2g2Cd4lj+ppiuOc6d5dsIZLCm6g8T*J2vpLdbASkrG9angQNLUPNmUHSvVlVIIf3wFFCHJ+BscPsLUEsBAhQDFAAACAgAVnz4WiMx48OsBAAAfQgAAAoAAAAAAAAAAAAAAICBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAA1AQAAAAAWRzLmpzb25QSwUGAAAAAAEAAQA4AAAA1AQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233257070196',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'napatelpro',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
is bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
