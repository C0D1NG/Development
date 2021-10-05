
#what can be inherited can also change example
class Animal:
    sound = ""
    """constructor definition taking parameter name"""
    def __init__(self, name):
        self.name = name
    """method  takes variable self that represents an instance """
    def speak(self):
        print("{sound} I'm {name}! {sound}".format(name = self.name,  sound = self.sound))
"""class piglet that inherits the class Animal attribute"""
class Piglet(Animal):
    """initializing the variable sound with another string """
    sound = "Oink!"
"""creating an instance of the class"""
hamlet = Piglet("Hamlet")
hamlet.speak()