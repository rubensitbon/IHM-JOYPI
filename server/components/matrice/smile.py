#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Copyright (c) 2017-18 Richard Hull and contributors
# License: https://github.com/rm-hull/luma.led_matrix/blob/master/LICENSE.rst
# Github link: https://github.com/rm-hull/luma.led_matrix/

# Import all the modules
import re
import time

from luma.led_matrix.device import max7219
from luma.core.interface.serial import spi, noop
from luma.core.render import canvas


def smile(cascaded, block_orientation, rotate):
	#create matrix device
	serial = spi(port=0, device=1, gpio=noop())
	device = max7219(serial, cascaded=cascaded or 1, block_orientation=block_orientation, rotate=rotate or 0)
	print("Created device")
	while(True):
		with canvas(device) as draw:
			draw.point((0,2), fill="white")
			draw.point((0,3), fill="white")
			draw.point((0,4), fill="white")
			draw.point((0,5), fill="white")

			draw.point((2,0), fill="white")
			draw.point((3,0), fill="white")
			draw.point((4,0), fill="white")
			draw.point((5,0), fill="white")

			draw.point((2,7), fill="white")
			draw.point((3,7), fill="white")
			draw.point((4,7), fill="white")
			draw.point((5,7), fill="white")

			draw.point((7,2), fill="white")
			draw.point((7,3), fill="white")
			draw.point((7,4), fill="white")
			draw.point((7,5), fill="white")

			draw.point((1,1), fill="white")
			draw.point((6,1), fill="white")
			draw.point((6,6), fill="white")
			draw.point((1,6), fill="white")

			draw.point((2,2), fill="white")
			draw.point((5,2), fill="white")

			draw.point((2,4), fill="white")
			draw.point((5,4), fill="white")
			draw.point((3,5), fill="white")
			draw.point((4,5), fill="white")
					#time.sleep(20)

	#for y in range(8):
		#for x in range(8):
			#with canvas(device) as draw:
				#draw.point((x,y), fill="white")
			#time.sleep(0.5)



if __name__ == "__main__":
	#parser = argparse.ArgumentParser(description='matrix_demo arguments', formatter_class=argparse.ArgumentDefaultsHelpFormatter)
	#parser.add_argument('--cascaded', '-n', type=int, default=1, help='Numberof cascaded MAX7219 LED MATRICES')
	#parser.add_argument('--block-orientaion', type=int, default=0, choices=[0, 90 -90], help='Corrects block orientation when wired vertically')
	#parser.add_argument('--rotate', type=int, default=0,choices=[0, 1, 2, 3], help='Rotate display 0=0°, 1=90°, 2=180°, 3=270°')

	#args = parser.parse_args()

	try:
		smile(cascaded=1, block_orientation=90, rotate=0)
	except KeyboardInterrupt:
		pass
