F2_TO_M2 = 0.09290304

print "What is the length of the room in feet? "
length = gets.to_i
print "What is the width of the room in feet? "
width = gets.to_i
puts "You entered dimensions of #{length} feet by #{width} feet."
puts "The area is"
square_feet = length * width
square_meters = square_feet * F2_TO_M2
puts "#{square_feet} square feet"
puts "#{square_meters} square meters"