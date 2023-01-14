import cx_Oracle

class OracleConnect:
    def __init__(self, username, password, instance_name):
        """
        :param username:    数据库用户名
        :param password:    数据库密码
        :param host_ip:     数据库主机IP地址
        :param port:        数据库主机端口
        :param instance_name:   数据库实例名称
        """
        self.username = username
        self.password = password
        self.instance_name = instance_name
        try:
            self.conn = cx_Oracle.connect('{}/{}@{}'.format(self.username, self.password,self.instance_name))  # 连接数据库字符串

            self.status = True
        except Exception as e:
            print(e, '>>> ' + self.instance_name)
            self.status = False

    '''
    Gets data in the format of json
    '''

    def get_data(self, sql):
        if self.status:
            try:
                self.cursor = self.conn.cursor()  # 使用cursor()方法获取操作游标
                result = self.cursor.execute(sql)  # 执行SQL语句
                data = self.cursor.fetchall()  # 取出数据库所有数据
                des = self.cursor.description  # 获取表头
                self.cursor.close()	# 关闭游标
                '''
                转换为json格式数据
                '''
                dictlist = []
                for i in data:
                    list1 = list(i)
                    t = ",".join([item[0] for item in des])
                    watch_head = t.split(',')
                    dict1 = dict(zip(watch_head, list1))
                    dictlist.append(dict1)
                return dictlist  # 返回数据
            except Exception as e:
                print(e, '>>> ' + sql)

    '''
    commit update or inset or delete
    '''

    def commit_date(self, sql):
        if self.status:
            try:
                self.cursor = self.conn.cursor()  # 使用cursor()方法获取操作游标
                result = self.cursor.execute(sql)  # 执行SQL语句
                self.cursor.execute("commit") # 提交
                self.cursor.close()
                return True
            except Exception as e:
                print(e, '>>> ' + sql)

    def connclose(self):
        if self.status:
            self.conn.close() # 关闭连接


if __name__ == '__main__':
    '''数据库连接'''
    conn = OracleConnect('s2288848','Wsq19981021','geoslearn')
    '''执行select 语句'''
    data = conn.get_data("select * from CGSP_POINT where id ='1'")  # 获取数据
    print(data)
    if data:
        for i in data:
            print(i)  # 循环单条输出json格式数据
    '''提交update 或 inset 语句'''
    commit = conn.commit_date("delete from TEST where id ='3844'")  # 获取数据
    conn.connclose()  # 关闭连接

