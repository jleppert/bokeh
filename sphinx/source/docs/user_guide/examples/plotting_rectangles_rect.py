from math import pi

from bokeh.plotting import figure, show

p = figure(width=400, height=400)
p.rect(x=[1, 2, 3], y=[1, 2, 3], width=0.2, height=40, color="#CAB2D6",
       angle=pi/3, height_units="screen")

show(p)
