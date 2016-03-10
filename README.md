# SkrollrTimeUpdater
Script to change Skrollr Times line from a specific point


You can you this script to update time line skrollr js.

add datax-<value> any where in your skrollr based project ( eg: datax-100	)\n

This script will add above value(datax-<value>) with data-<value> from datax-<value> statement

 - eg: if datax-100, then every data-1000 change to data-1100

 - eg: if datax--100, then every data-1000 change to data-900

## Run SkrollrTimeUpdater
to run you need node, and run 
```
node skrollrTimeUpDown.js <input file> <output file>
```

