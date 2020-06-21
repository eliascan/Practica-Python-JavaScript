'''
In the equation below, considering that X is an integer between -10**exp and 10**exp, in how many cases Y is an integer?

Y = X / X**0.5
'''

def cases_int(exp):
    try:
        counter = 0
        for x in range(-(pow(10,exp)), pow(10,exp)):
            pw = abs(x**0.5)
            if pw == 0:
                pw = 1
            y = x / pw
            if y.is_integer():
                # print(y)
                counter+=1
    except:
        print("Some error happen")
    finally:
        print("Number of cases in which the result is an integer: ", counter)

cases_int(2)
