#2024-08-22 15:01:34
'''
cron: 30 11 * * *
new Env('望潮阅读抽奖');
群组：https://t.me/yangmaoxz
频道地址：https://t.me/ymxzpd
使用方法：
1.打开app，点击阅读有礼
2.抓包https://xmt.taizhou.com.cn/prod-api/user-read/app/login接口的id,sessionId,deviceId参数
3.配置文件添加
单账户：export wcread="[ {'name': 'xxx','aid': 'id', 'sid': 'sessionId', 'deviceId':'deviceId'}]"
多账户：export wcread="[
{'name': 'xxx','aid': 'xxxx', 'sid': 'xxxx', 'deviceId':'xxxx'},
{'name': 'xxx','aid': 'xxxx', 'sid': 'xxxx', 'deviceId':'xxxx'}
]"
参数说明：
bz:备注名随意填写
aid:2步骤中的id参数
sid:2步骤中的sessionId参数
deviceId:2步骤中的deviceId参数
'''
XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkThs=None
XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd=print
XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsh=exit
XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhdT=Exception
XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhds=True
XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhTd=str
XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhTs=int
XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhsd=False
XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhsT=id
import requests
XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkdTs=requests.get
XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkdTh=requests.session
import time
XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkdsT=time.strftime
XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkdhs=time.time
XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkdhT=time.sleep
import random
XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkdsh=random.randint
import hashlib
XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTdh=hashlib.md5
import os
XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTds=os.getenv
import json
XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkThd=json.loads
def XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdskT(text):
 m=XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTdh(text.encode(encoding='utf-8'))
 return m.hexdigest()
def XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdskh():
 XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTh=XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTds('wcread')
 if XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTh==XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkThs:
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd('脚本变量参数不存在')
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsh(0)
 try:
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTh=XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkThd(XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTh.replace("'",'"'))
  return XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTh
 except XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhdT as e:
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd('变量参数填写有误:',e)
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd('你填写的是:',XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTh)
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsh(0)
class XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhsT:
 def __init__(XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs,cg):
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.deviceId=cg['deviceId']
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.aid=cg["aid"]
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.sid=cg["sid"]
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.name=cg['name']
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.sec=XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkdTh()
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.sec.headers={'User-Agent':'Mozilla/5.0 (Linux; Android 9; LIO-AN00 Build/LIO-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/92.0.4515.131 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;5.3.2;native_app','X-Requested-With':'com.shangc.tiennews.taizhou','Referer':'https://srv-app.taizhou.com.cn/luckdraw/'}
 def XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdsTk(XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs):
  u='https://xmt.taizhou.com.cn/prod-api/user-read/app/login?id='+XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.aid+'&sessionId='+XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.sid+'&deviceId='+XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.deviceId
  r=XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.sec.get(u)
  rj=r.json()
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkhT=rj.get('data')
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkdhT(1)
  if XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkhT:
   XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkhs=XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkhT.get('needYz')
   if XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkhs==XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhds:
    XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdksT=XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkhT.get('yzm')
    ts=XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhTd(XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhTs(XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkdhs()*1000))
    ms='&&TlGFQAOlCIVxnKopQnW&&'+ts+'&&'+XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdksT
    XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdksh=XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdskT(ms)
    uu=f'https://xmt.taizhou.com.cn/prod-api/user-read/yzmyz?signature='+XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdksh+'&timestamp='+ts+'&yzm='+XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdksT
    rr=XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.sec.get(uu)
    if '加密错误' in rr.text:
     XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd(rr.text)
     try:
      import notify
      XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd('加密错误')
      notify.send('望潮通知','加密错误，登录成失败，账号异常或者活动异常')
     except XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhdT as e:
      XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd(e)
      XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd('推送消息失败')
     return XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhsd
    else:
     XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd('登录成功')
  else:
   XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd('登录成失败，账号ck失效或者活动异常')
   return XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhsd
 def XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdsTh(XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs):
  u1='https://xmt.taizhou.com.cn/prod-api/user-read/list/'+XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhTd(XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkdsT("%Y%m%d"))
  r1=XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.sec.get(u1)
  if '操作成功' in r1.text:
   XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd('获取文章成功')
  else:
   XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd('获取文章失败')
   return XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhsd
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdTkh=r1.json().get('data').get('articleIsReadList')
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkdhT(XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkdsh(2,4))
  for i in XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdTkh:
   XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd('-'*50)
   XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhsT=i.get('id')
   XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdTks=i.get('title')
   XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdThk=i.get('isRead')
   XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd('阅读文章',XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdTks)
   if XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdThk==XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhds:
    XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd(f'文章:'+XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdTks+'阅读已完成')
    continue
   ts=XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhTd(XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhTs(XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkdhs()*1000))
   ms='&&'+XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhTd(XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhsT)+'&&TlGFQAOlCIVxnKopQnW&&'+ts
   XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdksh=XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdskT(ms)
   u2='https://xmt.taizhou.com.cn/prod-api/already-read/article?articid='+XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhTd(XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhsT)+'&timestamp='+ts+'&signature='+XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdksh
   r2=XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.sec.get(u2)
   XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd('阅读文章结果:',r2.text)
   XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkdhT(XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkdsh(2,4))
 def XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdshk(XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs):
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.sec.headers.update({'Referer':'https://srv-app.taizhou.com.cn/luckdraw/','Host':'srv-app.taizhou.com.cn'})
  u1='https://srv-app.taizhou.com.cn/tzrb/awardUpgrade/list?activityId=67'
  r1=XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkdTs(u1)
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdThs=r1.json()
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdTsk=XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdThs.get('data')
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdTsh={}
  for i in XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdTsk:
   XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdTsh.update({i.get('id'):i.get('title')})
  u2='https://srv-app.taizhou.com.cn/tzrb/user/loginWC?accountId='+XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.aid+'&sessionId='+XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.sid
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.sec.get(u2)
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkdhT(XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkdsh(2,4))
  u3='https://srv-app.taizhou.com.cn/tzrb/userAwardRecordUpgrade/saveUpdate'
  p='activityId=67&sessionId=undefined&sig=undefined&token=undefined'
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.sec.headers.update({'Content-type':'application/x-www-form-urlencoded'})
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhkT=XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.sec.post(u3,data=p)
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhks=XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhkT.json()
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd(XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhks)
  if XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhks.get('code')==200:
   XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd('抽奖结果:'+XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdTsh.get(XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhks.get("data")))
   XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhTk='抽奖结果:'+XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdTsh.get(XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhks.get("data"))
  elif XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhks.get('code')==500:
   XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd('抽奖结果:',XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhks.get('message'))
   XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhTk='抽奖结果:'+XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhks.get("message")
  else:
   XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd('未知结果')
   XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhTk='未知结果'
  return XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.name+':'+XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhTk+'\n'
 def XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdshT(XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs):
  if XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdsTk()==XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhsd:return XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.name+':'+'登录失败，账号ck失效，或者活动异常'
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdsTh()
  return XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdkTs.XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdshk()
if __name__=='__main__':
 XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhTs=''
 XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd('''
Telegram group:https://t.me/yangmaoxz
Telegram Address:https://t.me/ymxzpd
    ''' )
 for XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhsk in XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdskh():
  sa=XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhsT(XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhsk)
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhTs+=sa.XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdshT()
 XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd(XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhTs)
 try:
  import notify
  notify.send('望潮推送',XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFdhTs)
 except XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkhdT as e:
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd(e)
  XuGWzlcQIfLbnNBDieOVUKHSMypPRaAYrCtJjEogqmvxwFkTsd('推送消息失败')
