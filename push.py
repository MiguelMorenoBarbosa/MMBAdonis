from os import system

message = input('message: ')

system('git config user.name "MiguelMorenoBarbosa"')
system('git config user.email "miguelmorenobarbosa7@gmail.com"')
system('git add .')
system('git commit -m "' + message + '"')
system('git push origin master')

#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