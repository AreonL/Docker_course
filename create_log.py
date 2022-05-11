# ## Filtered file example
# with open('./50/Zookeeper.log', 'r') as f:
#   with open('./50/Zookeeper_filtered.log', 'w') as file_fixed:
#     for i in f:
#       if 'Received' in i:
#         file_fixed.write(i)

# ## Create a table with mutiple columns
# with open('./50/Zookeeper.log', 'r') as f:
#   with open('./50/Zookeeper_description50k.csv', 'w') as file_fixed:
#     file_fixed.write('"date","time","status","action","description"\n')
#     for i in f:
#       i = i.replace('\n', '').split(' - ')
#       date, time = i[0].split(' ')
#       if i[1][0:5] == 'ERROR':
#         status, action = i[1].split(' ')
#       else:
#         status, action = i[1].split('  ')
#       file_fixed.write(f'"{date}","{time}","{status}","{action}","{i[2]}"\n')

# ## Create bigger log file
# with open(f'./50/Zookeeper.log', 'r') as f:
#   with open(f'./100/Zookeeper.log', 'w') as file_fixed:
#     for i in f:
#       file_fixed.write(i)
#     file_fixed.write('\n')
# with open(f'./50/Zookeeper.log', 'r') as f:
#   with open(f'./100/Zookeeper.log', 'a') as file_fixed:
#     for i in f:
#       file_fixed.write(i)

# ## Log -> csv
# with open('./50/Zookeeper.log', 'r') as f:
#   with open('./log_fixed_size.csv', 'w') as file_fixed:
#     file_fixed.write("\"log_saved\"\n")
#     for i in f:
#       file_fixed.write("\""+i[:-1]+"\"\n")