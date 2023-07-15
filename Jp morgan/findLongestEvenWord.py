
# Find the longest word in a sentence that has an even length of characters 

def find_longest_word(sentence):
     arr = sentence.split(' ')
     maxWord = ''
     for word in arr:
           if len(word) > len(maxWord) and len(word) % 2 == 0:
                   maxWord = word
     return maxWord



if __name__ == '__main__':
    arr = "The journey of a thousand miles begins with a single step." # Read command line arguments as integers
    result = find_longest_word(arr)
    print(result)

