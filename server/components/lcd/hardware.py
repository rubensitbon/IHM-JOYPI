import time
import board
import busio
import adafruit_character_lcd.character_lcd_i2c as character_lcd
import sys

lcd_columns = 16
lcd_rows    = 2

i2c = busio.I2C(board.SCL, board.SDA)

lcd = character_lcd.Character_LCD_I2C(i2c, lcd_columns, lcd_rows)


try:

	if(len(sys.argv)>3):

		if(sys.argv[3] == '0'):

			lcd.backlight = True

			lcd.clear()

			ligne1 = sys.argv[1][0:16]
			ligne2 = sys.argv[2][0:16]

			lcd.message = ligne1+"\n"+ligne2

		else:

			lcd.clear()
			lcd.backlight = False

	else:
		print ('Pas assez d arguments')

except KeyboardInterrupt:
    lcd.clear()
    lcd.backlight = False