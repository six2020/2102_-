

## 命令基本格式

### 命令提示符

```shell
[root@localhost ~]#
```

- `root` ：当前登录用户
- `localhost` ：主机名
- `~` ： 当前⼯作⽬录,默认是当前⽤户的家⽬录，root就是/root,普通⽤户是 /home/⽤户名
- 提示符 超级⽤户是 #,普通⽤户是$

### 命令格式

- 命令 [选项] [参数]
- 当有多个选项时，可以写在⼀起
- ⼀般参数有简化和完整写法两种 -a 与 --all 等效

#### ls

- 查询⽬录中的内容
- ls [选项] [⽂件或者⽬录]
- 选项
    - `-a`： 显示所有⽂件，包括隐藏⽂件
    - `-l`： 显示详细信息
    - `-d`： 查看⽬录本身的属性⽽⾮⼦⽂件 ls /etc/
    - `-h`： ⼈性化的⽅式显示⽂件⼤⼩
    - `-i`： 显示inode,也就是i节点，每个节点都有ID号
- 默认当前⽬录下的⽂件列表

##### -l

显示详细信息

```shell
drwxr-xr-x . 1 root root 800 Sep 16 00:19 logs
```

|drwxr-xr-x|.|1|root|root|800|Sep 16 00:19|logs|
|---|---|---|---|---|---|---|---|
|⽂件类型和权限|ACL权限|硬链接引⽤计数|所有者|所属组|⽂件⼤⼩|最后修改时间|⽂件名|


**⽂件类型和权限**

```shell
-rw-r--r--
```

- ⽂件类型 - ⽂件、d ⽬录、l 软链接⽂件
- u(所有者)、g(所属组)、o(其他⼈)
- r(read) 读取、w(write) 写⼊、x(execute) 执⾏

---

### ⽂件处理命令

#### mkdir

- 建⽴⽬录 make directory
- mkdir -p [⽬录名]
    - `-p`： 递归创建


#### cd

- 切换所在⽬录 change directory
- cd [⽬录]
    - `~` ： 家⽬录
    - `-` ： 上次⽬录
    - `.` ： 当前⽬录
    - `..` ： 上级⽬录
- 相对路径是参照当前所在⽬录
- 绝对路径是从根⽬录开始
- 按TAB键可以补全命令和⽬录

#### pwd

- 显示当前⽬录 pwd

#### rmdir

- 删除⽬录 remove empty directory
- rmdir [⽬录名]

#### rm

- 删除⽂件或者⽬录 remove
- rm [⽂件或者⽬录]
    - `-r`： 删除⽬录
    - `-f`： 强制删除
- rm -rf ⽂件或者⽬录] 递归强制删除所有⽬录

#### cp

- copy 复制命令
- copy [源⽂件或者⽬录] [⽬标⽂件]
    - `-r` ： 复制⽬录,默认是复制⽂件
    - `-p` ： 连带⽂件属性复制
    - `-d` ： 若源⽂件是链接⽂件，则复制连接属性
    - `-a` ： 相当于 -rpd

####  mv

- 移动⽂件或者改名 move
- mv [源⽂件或者⽬录] [⽬标⽂件]

#### ln

- 链接命令,⽣成链接⽂件 link

#####  硬链接特征

- 拥有相同的i节点和存储block块，可以看作是同⼀个⽂件
- 可以通过i节点访问
- 不能跨分区
- 不能针对⽬录使⽤
- ⼀般不使⽤

#####  软链接特征

- ln -s [源⽂件] [⽬标⽂件]
    - -s 创建软链接
- 类似Windows快捷⽅式
- 软链接拥有⾃⼰的i节点和Block块，但是数据块中只保存源⽂件的⽂件名和i节点号，并没有实际的⽂件数据
- lrwxrwxrwx l 软链接 软链接的⽂件权限都是 777
- 修改任意⼀个⽂件，另⼀个都会改变
- 删除源⽂件，软链接不能使⽤
- 软链接源⽂件必须写绝对路径

---

###  ⽂件搜索命令

####  locate

- 在后台数据库中按⽂件名搜索，速度⽐较快
- 数据保存在 /var/lib/mlocate 后台数据库，每天更新⼀次
- 可以 updatedb 命令⽴刻更新数据库
- 只能搜索⽂件名

```shell
/etc/updatedb.conf
```
建⽴索引的配置⽂件

- PRUNE_BIND_MOUNTS = "yes" 全部⽣效，开启搜索限制
- PRUNEFS 不搜索的⽂件系统
- PRUNENAMES 忽略的⽂件类型
- PRUNEPATHS 忽略的路径 /tmp


####  whereis

- 搜索命令所在路径以及帮助⽂档所在位置
- whereis 命令名

```shell
whereis ls
```

- `-b`： 只查找可执⾏⽂件
- `-m`： 只查找帮助⽂件


#### which

- 可以看到别名 which ls
- 能看到的都是外部安装的命令
- ⽆法查看Shell⾃带的命令，如 which cd

#### find

- ⽂件搜索命令
- find [搜索范围] [搜索条件]

##### 按名称搜索

- 避免⼤范围的搜索，会⾮常消耗系统资源

```shell
find / -name aaa.log
```

##### 通配符

- find是在系统当中搜索符合条件的⽂件名，如果需要匹配，使⽤通配符匹配，通配符是完全匹配
- 通配符
- `*` : 匹配任意内容
- `?` : 匹配任意⼀个字符
- `[]` : 匹配任意⼀个中括号内的字符

```shell
find . -name "ab[cdef]"
```
不区分⼤⼩写

-i

```shell
find / -iname A.log
```

按所有者进⾏搜索

- user

```shell
find /root -user root
find /root -nouser
```

##### 按时间搜索

```shell
find /nginx/access.log -mtime +5 1
```

|参数|含义|
|---|---|
|atime|⽂件访问时间|
|ctime|改变⽂件属性|
|mtime|修改⽂件内容|





|参数|含义|
|---|---|
|-5|5天内修改的⽂件|
|5|5天前当前修改的⽂件|
|+5|5天前修改的⽂件|

##### 按⼤⼩搜索

- k⼩写,M⼤写

```shell
find . -size 100k
```

|参数|含义|
|---|---|
|-8k|⼩于8K|
|8k|等于8K|
|+8k|⼤于8K|
|+8M|⼩于8M|

##### 按i节点搜索

```shell
find . -inum 123456
```

##### 综合应⽤

```shell
find /tmp -size +10k -a -size -20k 1
```

- 查找/etc⽬录下，⼤于10KB并且⼩于20KB的⽂件
- `-a` and 逻辑与，两个条件都满⾜
- `-o` or 逻辑或，两个条件满⾜⼀个就可以

```shell
find /tmp -size +10k -a -size -20k -exec ls -lh {} \;
```

- exec 对上个命令的结果进⾏操作

##### grep

- 在⽂件当中匹配符合条件的字符串
- grep "10" access.log
    - `-i` : 忽略⼤⼩写
    - `-v` : 排除指定字符串
- find命令，在系统当中搜索符合条件的⽂件名，如果需要匹配，使⽤通配符匹配，通配符是完全匹配
- grep命令 在⽂件当中搜索符合条件的字符串，如果需要匹配，使⽤正则表达式进⾏匹配，正则表达式时包含匹配

###  帮助命令

#### 基本⽤法

- man 命令 获取指定命令的帮助
- `man ls` 查看ls的帮助

```shell
man -f ls
whatis ls
man 1 ls
man 1p ls
```

#### 关键字搜索

```shell
- man -k passwd
```

#### shell 内部帮助

```shell
whereis
```

找到就是外部，找不到就是内部

```shell
help cd
```

###  压缩与解压缩命令

`.zip` `.gz` `.bz2` `.tar.gz` `.tar.bz2`

#### zip格式

- 压缩⽂件 zip 压缩⽂件名 源⽂件
- 压缩⽬录 zip -r 压缩⽂件名 源⽬录
- 解压 unzip 压缩⽂件名

```shell
mkdir book
touch book/1.txt
touch book/2.txt
zip -r book.zip book
unzip book.zip
```

#### gzip

|命令|示例|含义|
|---|---|---|
|gzip 源⽂件|gzip a.txt|压缩为.gz格式的压缩⽂件，源⽂件会消失|
|gzip -c 源⽂件 > 压缩⽂件|gzip -c yum.txt > yum.txt.gz|压缩为.gz格式的压缩⽂件，源⽂件不会消失|
|gzip -r ⽬录|gzip -r xx|压缩⽬录下的所有⼦⽂件，但是不压缩⽬录|
|gzip -d 压缩⽂件名|gzip -d yum.txt.gz|解压缩⽂件,不保留压缩包|
|gunzip 压缩⽂件|gunzip yum.txt.gz|解压缩⽂件,不保留压缩包|

- 压缩是压缩⽬录下的⽂件

#### .bz2格式压缩

|命令|示例|含义|
|---|---|---|
|bzip2 源⽂件|bzip2 1.txt|压缩为.bz2格式的⽂件，不保留源⽂件|
|bzip2 -k 源⽂件|zip2 -k 1.txt|压缩为.bz2格式的⽂件，保留源⽂件|
|bzip2 -d 压缩⽂件名|bzip2 -d 1.txt.bz2|解压压缩包|
|bunzip2 压缩⽂件名|bunzip2 1.txt.bz2|解压压缩包|

- bzip2 不能压缩⽬录

#### tar

- 打包命令
- tar -cvf 打包⽂件名 源⽂件
    - `-c` : 打包
    - `-v` : 显示过程
    - `-f` : 指定打包后的⽂件名

```shell
tar -cvf book.tar book
gzip book.tar
bzip2 book.tar
```

- x 解打包

```shell
tar -xvf book.tar
```

####  压缩格式

##### 压缩

tar –cvf jpg.tar *.jpg //将⽬录⾥所有jpg⽂件打包成tar.jpg tar –czf jpg.tar.gz *.jpg //将⽬录⾥所有jpg⽂件打包成jpg.tar后，并且将其⽤gzip压缩，⽣成⼀个gzip压缩过的包，命名为jpg.tar.gztar –cjf jpg.tar.bz2 *.jpg //将⽬录⾥所有jpg⽂件打包成jpg.tar后，并且将其⽤bzip2压缩，⽣成⼀个bzip2压缩过的包，命名为jpg.tar.bz2 tar –cZf jpg.tar.Z *.jpg //将⽬录⾥所有jpg⽂件打包成jpg.tar后，并且将其⽤compress压缩，⽣成⼀个umcompress压缩过的包，命名为jpg.tar.Z rara jpg.rar *.jpg //rar格式的压缩，需要先下载rar for linux zip jpg.zip *.jpg //zip格式的压缩，需要先下载zip for linux

##### 解压


```shell
tar –xvf file.tar //解压 tar包 tar -xzvf file.tar.gz //解压tar.gz tar -xjvf file.tar.bz2 //解压 tar.bz2
tar –xZvf file.tar.Z //解压tar.Z unrar e file.rar //解压rar unzip file.zip //解压zip
```

---

### 关机和重启命令

#### shutdown

shutdown 关机命令
- `-c` : 取消前⼀个关机命令
- `-h` : 关机
- `-r` : 重启

```shell
shutdown -r 06:00
shutdown -c
```

#### init

关机
```shell
init 0
```

重启
```shell
init 6
```

##### 系统的运⾏级别

- 0 关机
- 1 单⽤户
- 2 不完全多⽤户，不包含NFS服务
- 3 完全多⽤户
- 4 未分配
- 5 图形界⾯
- 6 重启

####  logout

退出登录

```shell
logout
```

---

### 查看登录⽤户信息

#### w

查看登录⽤户信息

- `USER` :  登录的⽤户名
- `TTY` :  登录的终端 tty1 本地终端 pts/0远程终端
- `FROM` :  登录的IP
- `LOGIN` :  登录时间
- `IDLE` :  ⽤户闲置时间
- `JCPU` :  该终端所有进程占⽤的时间
- `PCPU` :  当前进程所占⽤的时间
- `WHAT` :  正在执⾏的命令

#### who

查看登录⽤户信息
- USER 登录的⽤户名
- TTY 登录的终端 tty1 本地终端 pts/0远程终端
- LOGIN 登录时间（登录的IP）

#### last

查看当前登录和过去登录的⽤户信息 默认读取 /var/log/wtmp - ⽂件
- ⽤户名
- 登录终端
- 登录IP
- 登录时间
- 退出时间(在线时间)

####  lastlog

查看所有⽤户的最后⼀次登录时间
- ⽤户名
- 登录终端
- 登录IP
- 最后⼀次登录时间

---

## shell

- shell是⼀个命令⾏解释器，它为⽤户提供了⼀个向Linux内核发送请求以便运⾏程序的界⾯系统级程序
- ⽤户可以⽤Shell来启动、挂起、停⽌或者编写⼀些程序
- Shell还是⼀个功能相当强⼤的编程语⾔，易编写，易调试，灵活较强。
- Shell是解释执⾏的脚本语⾔，在Shell中可以直接调⽤Linux系统命令。

### 查看⽀持的shell

- /etc/shells

### echo

- 输出命令
- --e ⽀持反斜线控制的字符转换

|控制字符|作⽤|
|---|---|
|\a|输出警告⾳|
|\b|退格键，也就是向左删除键|
|\n|换⾏符|
|\r|回⻋键|
|\t|制表符，也就是Tab键|
|\v|垂直制表符|
|\onnn|按照⼋进制ASCII码表输出字符，其中0为数字零，nnn是三位⼋进制数|
|\xhh|按照⼗六进制ASCII码表输出字符，其中hh是两位⼗六进制数|

#### 编写执⾏shell

```shell
#!/bin/bash
echo -e "\e[1;34m hello world \e[0m"
```

赋予执⾏权限，直接运⾏

```shell
chmod 755 hello.sh
./hello.sh
```

通过Bash调⽤执⾏脚本

```shell
bash hello.sh
```

#### 别名

- 命令别名 == ⼩名
- 临时⽣效
- `alias`
- `alias rm="rm -i"`
- 写⼊环境变量配置⽂件 vi ~/.bashrc
- `source ~/.bashrc`
- unalias 别名 删除别名

#### 命令的⽣效顺序

- 绝对路径或者相对路径
- 别名
- bash内部命令
- 按照$PATH环境变量定义的⽬录查找顺序找到的第⼀个命令

#### 命令快捷键

|命令|含义|
|---|---|
|ctrl+c|强制终⽌当前命令|
|ctrl+l|清屏|
|ctrl+a|光标移动到命令⾏⾸|
|ctrl+e|光标移动到命令⾏尾|
|ctrl+u|从光标所在的位置删除到⾏⾸|
|ctrl+z|把命令放⼊后台|
|ctrl+r|在历史命令中搜索|

#### 历史命令

- history [选项] [历史命令保存⽂件]
- 选项
    - `-c` : 清空历史命令
    - `-w` : 把缓存中的历史命令写⼊历史命令保存⽂件 ~/.bash_history
- 默认保存1000条 /etc/profile HISSIZE=10000

#### 调⽤

- 使⽤上下箭头调⽤以前的历史命令
- 使⽤ !n 重复执⾏第n条历史命令
- 使⽤ !! 重复执⾏上⼀条命令
- 使⽤ !字符 重复执⾏最后⼀条以该字符串开头的命令

---

### 管道符号

#### 多命令顺序执⾏

(1) ; 分号，没有任何逻辑关系的连接符。当多个命令⽤分号连接时，各命令之间的执⾏成功与否彼此没有任何影响，都会⼀条⼀条执⾏下去。

(2) || 逻辑或，当⽤此连接符连接多个命令时，前⾯的命令执⾏成功，则后⾯的命令不会执⾏。前⾯的命令执⾏失败，后⾯的命令才会执⾏。

(3) && 逻辑与，当⽤此连接符连接多个命令时，前⾯的命令执⾏成功，才会执⾏后⾯的命令，前⾯的命令执⾏失败，后⾯的命令不会执⾏，与 || 正好相反。

(4) | 管道符，当⽤此连接符连接多个命令时，前⾯命令执⾏的正确输出，会交给后⾯的命令继续处理。若前⾯的命令执⾏失败，则会报错，若后⾯的命令⽆法处理前⾯命令的输出，也会报错。


```shell
- date;ls;date;ls
- ls && echo yes || echo no
```

#### 管道符号

- 命令1的正确输出会作为命令2的操作对象
- 命令1|命令2

```shell
ls /etc/ | more
netstat -an | grep ESTABLISHED | wc -l
```

#### 通配符

匹配⽂件名和⽬录名 |通配符|作⽤| |:----|:----| |?|匹配⼀个任意字符| |*|匹配0个或任意字符，也就
是可以匹配任意内容| |[]|匹配中括号中任意⼀个字符| |[-]|匹配中括号中任意⼀个字符,-代表范围| |
[^]|匹配不是中括号中的⼀个字符|

#### 其它符号

|符号|作⽤|
|---|---|
|''|单引号。在单引号中所有的特殊符号，如$和`都没有特殊含义|
|""|双引号，在双引号⾥特殊符号都没有特殊含义，但是 $ ` \ 例外，拥有调⽤变量值，引⽤命令和转义的含义|
|``|反引号，扩起来的是系统命令|
|$()|和反引号⼀样|
|#|在shell脚本中，#开头的⾏代表注释|
|$|⽤于调⽤变量的值|
|\|转义符号|

```shell
- a=`ls`
- b=$(ls)
```

---

## vi / vim编辑器

- VI visual interface
- 可视化接⼝
- 类似与windows中的记事本
- vim⽀持多级撤销
- 跨平台
- 语法⾼亮
- ⽀持图形界⾯

### 操作模式

- :w 保存
- :q 退出
- :! 强制保存
- :ls 列出所有的⽂件
- n 下⼀个
- N 上⼀个
- :15 跳转到指定⾏
- /xxx 从光标位置开始向后搜索 xxx 字符串
- ?xxx 从光标位置开始向前搜索

---

## ⽤户和⽤户组

- 使⽤操作系统的⼈都是⽤户
- ⽤户组是具有相同系统权限的⼀组⽤户

### ⽤户组

#### /etc/group

- /etc/group 存储当前系统中所有⽤户组信息
- group:x:123:abc,def
- 组名称:组密码占位符:组编号:组中⽤户名列表
- root 组编号为0
- 1-499系统预留的编号 预留给安装的软件和服务的
- ⽤户⼿动创建的⽤户组从500开始
- 组密码占位符都是x

#### /etc/gshadow

- 存放当前系统中⽤户组的密码信息
- 和group中的记录⼀⼀对应
- `Group: * : :abc`
- 组名称 组密码 组管理者 组中⽤户名

#### /etc/passwd

- 存储当前系统中所有⽤户的信息
- `user:x:123:456:xxxxx:/home/user:/bin/bash`
- ⽤户名:密码占位符:⽤户编号: ⽤户注释信息:⽤户主⽬录:shell类型

#### /etc/shadow

- 存放当前系统中所有⽤户的密码信息
- `user:xxx:::::::`
- ⽤户名:密码:

---

## ⽤户操作

添加组
```shell
groupadd student
```

修改组名称
```shell
groupmod -n stu student
```

修改组编号
```shell
groupmod -g 111 stu
```

添加分组并指定编号
```shell
groupadd -g 222 teacher
```

删除分组
```shell
groupdel 222
```
添加分组
```shell
groupadd teacher

为⽤户指定所属组
```
```shell
useradd -g teacher zhangsan
```

为⽤户指定⼯作⽬录
```shell
useradd -d /home/zhangsan zhangsan
```

指定注释
```shell
usermod -c iamateacher zhangsan
```

修改⽤户名
```shell
usermod -l zhangsan zhangsan2
```

指定⽂件夹
```shell
usermod -d /home/zhangsan2 zhangsan2
```

修改⽤户所属组
```shell
usermod -g stu zhangsan2
```

删除⽤户
```shell
userdel zhangsan2
```

删除所属⽂件夹
```shell
userdel -r lisi 1
```

---

## ⽤户命令

显示登录的⽤户名
```shell
whoami
```

显示指定⽤户信息，包括⽤户编号，⽤户名 主要组的编号及名称，附属组列表
```shell
id zhangsan
```

显示zhangsan⽤户所在的所有组
```shell
groups zhangsan
```

显示⽤户详细资料
```shell
finger zhangsan
```






```shell

```
```shell

```
```shell

```
```shell

```
```shell

```
```shell

```
```shell

```
```shell

```
```shell

```
```shell

```
```shell

```
```shell

```
```shell

```
```shell

```
```shell

```
```shell

```
```shell

```
```shell

```
```shell

```
```shell

```