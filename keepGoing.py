""" keepGoing.py
    demonstrats loop with multiple exits 
    Andy Harris """

correct = "IndyPy"
tries = 0

keepGoing = True
while(keepGoing):
  
  tries = tries + 1
  print("try #", tries)
  
  guess = input("What is the password? ")
  if guess == correct:
    print("That's correct! here's the treasure!")
    keepGoing = False
    
  elif tries >= 3:
    print("Too many wrong times.Launching the missiles!")
    keepGoing = False