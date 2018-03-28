load data
infile ''
append
into table table_name
fields terminated by ","
(category_id, category_name,shortname, sort_name)



export ORACLE_HOME=/usr/local/libexec/oracle11g-client/bin/sqlldr
PATH="$PATH:$ORACLE_HOME/bin"