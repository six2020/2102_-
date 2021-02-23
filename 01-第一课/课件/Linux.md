# Linux

 1. 认识 **Linux**
    - **Linux**是什么
    - 常用**Linux**发行版
 1. 搭建环境
    - 2.1 下载虚拟机
    - 2.2 安装虚拟机
    - 2.3 下载**CentOS 7**安装盘镜像
    - 2.4 安装 **CentOS** 

 1. 认识 **Linux** 环境
 1. 安装开发环境
    - 安装`node.js`
    - 安装 **VSCode** 编辑器

---

## `1 认识 Linux`

https://www.kernel.org/

---

## `2 搭建环境`

 - 下载安装 vmware workstation pro
 - 下载 CentOS 安装盘镜像

#### `2.1 下载虚拟机`

> 下载步骤

1. 访问网址：https://www.vmware.com/cn.html
1. 注册用户
1. 下载：https://my.vmware.com/cn/web/vmware/downloads/info/slug/desktop_end_user_computing/vmware_workstation_pro/16_0
1. 安装

#### `2.2 安装虚拟机`

> 安装步骤

---

#### `2.3 下载CentOS 7安装盘镜像`


1. 访问CentOS官网：https://www.centos.org/
1. 光盘镜像下载页面：https://www.centos.org/download/
1. 版本
    - `DVD ISO` 带图形界面
    - `Minimal ISO` 不带图形界面
1. 点击按钮后会进入一个镜像网站的列列表，选择阿里里云、华为云等比较快的服务器

#### `2.4 安装CentOS与配置`

> 安装与配置过程

---

## `3 认识 Linux 环境`

Linux下的⽬录都是做什么⽤的

|⽬录|应放置档案内容|
|---|---|
|/bin|系统有很多放置执⾏档的⽬录，但/bin⽐较特殊。因为/bin放置的是在单⼈维护模式下还能够被操作的指令。在/bin底下的指令可以被root与⼀般帐号所使⽤，主要有：cat,chmod(修改权限), chown, date, mv, mkdir, cp, bash等等常⽤的指令。|
|/boot|主要放置开机会使⽤到的档案，包括Linux核⼼档案以及开机选单与开机所需设定档等等。Linux kernel常⽤的档名为：vmlinuz ，如果使⽤的是grub这个开机管理程式，则还会存在/boot/grub/这个⽬录。|
|/dev|在Linux系统上，任何装置与周边设备都是以档案的型态存在于这个⽬录当中。 只要通过存取这个⽬录下的某个档案，就等于存取某个装置。⽐要重要的档案有/dev/null,/dev/zero, /dev/tty , /dev/lp, / dev/hd, /dev/sd*等等|
|/etc|系统主要的设定档⼏乎都放置在这个⽬录内，例如⼈员的帐号密码档、各种服务的启始档等等。 ⼀般来说，这个⽬录下的各档案属性是可以让⼀般使⽤者查阅的，但是只有root有权⼒修改。 FHS建议不要放置可执⾏档(binary)在这个⽬录中。 ⽐较重要的档案有：/etc/inittab, /etc/init.d/, /etc/modprobe.conf, /etc/X11/, /etc/fstab,/etc/sysconfig/等等。 另外，其下重要的⽬录有：/etc/init.d/ ：所有服务的预设启动script都是放在这⾥的，例如要启动或者关闭iptables的话： /etc/init.d/iptablesstart、/etc/init.d/ iptables stop/etc/xinetd.d/ ：这就是所谓的super daemon管理的各项服务的设定档⽬录。/etc/X11/ ：与X Window有关的各种设定档都在这⾥，尤其是xorg.conf或XF86Config这两个X Server的设定档。|
|/home|这是系统预设的使⽤者家⽬录(home directory)。 在你新增⼀个⼀般使⽤者帐号时，预设的使⽤者家⽬录都会规范到这⾥来。⽐较重要的是，家⽬录有两种代号： ~ ：代表当前使⽤者的家⽬录，⽽ ~guest：则代表⽤户名为guest的家⽬录。|
|/lib|系统的函式库⾮常的多，⽽/lib放置的则是在开机时会⽤到的函式库，以及在/bin或/sbin底下的指令会呼叫的函式库⽽已 。 什么是函式库呢？妳可以将他想成是外挂，某些指令必须要有这些外挂才能够顺利完成程式的执⾏之意。 尤其重要的是/lib/modules/这个⽬录，因为该⽬录会放置核⼼相关的模组(驱动程式)。|
|/media|media是媒体的英⽂，顾名思义，这个/media底下放置的就是可移除的装置。 包括软碟、光碟、DVD等等装置都暂时挂载于此。 常⻅的档名有：/media/floppy,/media/cdrom等等。|
|/mnt|如果妳想要暂时挂载某些额外的装置，⼀般建议妳可以放置到这个⽬录中。在古早时候，这个⽬录的⽤途与/media相同啦。 只是有了/media之后，这个⽬录就⽤来暂时挂载⽤了。|
|/opt|这个是给第三⽅协⼒软体放置的⽬录 。 什么是第三⽅协⼒软体啊？举例来说，KDE这个桌⾯管理系统是⼀个独⽴的计画，不过他可以安装到Linux系统中，因此KDE的软体就建议放置到此⽬录下了。 另外，如果妳想要⾃⾏安装额外的软体(⾮原本的distribution提供的)，那么也能够将你的软体安装到这⾥来。 不过，以前的Linux系统中，我们还是习惯放置在/usr/local⽬录下。|
|/root|系统管理员(root)的家⽬录。 之所以放在这⾥，是因为如果进⼊单⼈维护模式⽽仅挂载根⽬录时，该⽬录就能够拥有root的家⽬录，所以我们会希望root的家⽬录与根⽬录放置在同⼀个分区中。|
|/sbin|Linux有⾮常多指令是⽤来设定系统环境的，这些指令只有root才能够利⽤来设定系统，其他使⽤者最多只能⽤来查询⽽已。放在/sbin底下的为开机过程中所需要的，⾥⾯包括了开机、修复、还原系统所需要的指令。⾄于某些伺服器软体程式，⼀般则放置到/usr/sbin/当中。⾄于本机⾃⾏安装的软体所产⽣的系统执⾏档(system binary)，则放置到/usr/local/sbin/当中了。常⻅的指令包括：fdisk, fsck, ifconfig, init, mkfs等等。|
|/srv|srv可以视为service的缩写，是⼀些⽹路服务启动之后，这些服务所需要取⽤的资料⽬录。 常⻅的服务例如WWW, FTP等等。 举例来说，WWW伺服器需要的⽹⻚资料就可以放置在/srv/www/⾥⾯。呵呵，看来平时我们编写的代码应该放到这⾥了。|
|/tmp|这是让⼀般使⽤者或者是正在执⾏的程序暂时放置档案的地⽅。这个⽬录是任何⼈都能够存取的，所以你需要定期的清理⼀下。当然，重要资料不可放置在此⽬录啊。 因为FHS甚⾄建议在开机时，应该要将/tmp下的资料都删除。|

---

## `4 安装开发环境`

#### `安装node.js`

- yum安装方法 https://rpm.nodesource.com/

```shell
# 添加官方的yum源
curl -sL https://rpm.nodesource.com/setup_12.x | bash -

# yum命令安装
yum install nodejs -y

# 查看安装的版本
node -v

```

- 源码编译安装方法

---

#### `安装 VSCode 编辑器`

> 教程地址
- https://code.visualstudio.com/docs/setup/linux#_rhel-fedora-and-centos-based-distributions

**安装密​​钥和存储库**

```shell
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
```
```shell
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
```

**yum命令安装**

```shell
yum check-update
```
```shell
sudo yum install code
```

成功安装














1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1