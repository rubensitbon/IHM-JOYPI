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


def sad(cascaded, block_orientation, rotate):
	#create matrix device
	serial = spi(port=0, device=1, gpio=noop())
	device = max7219(serial, cascaded=cascaded or 1, block_orientation=block_orientation, rotate=rotate or 0)
	device.contrast(20)
	
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

			draw.point((2,5), fill="white")
			draw.point((5,5), fill="white")
			draw.point((3,4), fill="white")
			draw.point((4,4), fill="white")
			

	#for y in range(8):
		#for x in range(8):
			#with canvas(device) as draw:
				#draw.point((x,y), fill="white")
			#time.sleep(0.5)



if __name__ == "__main__":


	try:
		sad(cascaded=1, block_orientation=90, rotate=0)
	except KeyboardInterrupt:
		pass
