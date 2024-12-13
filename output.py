#2024-12-13 14:27:50
import requests
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt=print
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtEi=Exception
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtEF=None
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtiE=str
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtiF=int
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtFE=True
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtFi=False
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBFEi=len
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBFEt=chr
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBFiE=ord
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBFit=zip
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBFtE=globals
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBFti=exit
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBEit=requests.session
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiFtB=requests.get
import random
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBEiF=random.randint
import uuid
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBEti=uuid.uuid4
import hashlib
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBEFi=hashlib.sha256
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBEtF=hashlib.md5
import os
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBEFt=os.getenv
from gmssl import sm2
import json
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiEF=json.loads
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiEt=json.dumps
import time
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFE=time.strftime
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBitF=time.sleep
fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBitE=time.time
def fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiBFt():
 fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEiBt='V4.1'
 try:
  u='http://175.24.153.42:8881/getmsg'
  p={'type':'bt_wcydcj'}
  r=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiFtB(u,params=p,timeout=2)
  rj=r.json()
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEiBF=rj.get('version')
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitB=rj.get('gmmsg')
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('系统公告:',fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitB)
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('最新版本:',fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEiBF,',','当前版本:',fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEiBt)
  if fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEiBt!=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEiBF:
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('版本不一致，可能要更新脚本了')
 except fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtEi as e:
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt(e)
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('公告服务器异常')
 fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('*'*50)
def fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCitEB(text):
 m=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBEtF(text.encode(encoding='utf-8'))
 return m.hexdigest()
class fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiBFE:
 def __init__(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF,cg):
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.deviceId=cg['deviceId']
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.aid=cg["aid"]
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.sid=cg["sid"]
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.name=cg['name']
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.sec=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBEit()
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.sec.headers={'Host':'xmt.taizhou.com.cn','User-Agent':'Mozilla/5.0 (Linux; Android 9; LIO-AN00 Build/LIO-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/92.0.4515.131 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;5.3.2;native_app','X-Requested-With':'com.shangc.tiennews.taizhou','Referer':'https://srv-app.taizhou.com.cn/luckdraw/'}
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.oneKey1='djidfovnsdncv'
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.headers={'Host':'vapp.taizhou.com.cn','Cache-Control':'no-cache','User-Agent':'6.0.2;'+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.deviceId+';Samsung SM-G955N;Android;9;tencent;6.10.0','Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','X-ACCOUNT-ID':fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.aid,'Connection':'Keep-Alive','Accept-Encoding':'gzip'}
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.t2='&Y\\FXC^3&+[%W,NWJ!VQ'
 def fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCitEF(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF,datas):
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.t6ok=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.t1+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.t2+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.t3+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.t4+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.t5
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEiFB=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiEt(datas,separators=(',',':'))
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEiFt=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiFEt(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.t6ok)
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBit=sm2.CryptSM2(public_key=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEiFt,private_key=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtEF,mode=1)
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBiF=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBit.encrypt(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEiFB.encode('utf-8')).hex()
  return fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBiF
 def fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCitBE(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF):
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.ones2="sdbedjmvnsiv"
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBti=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtiE(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBEti())
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.t1='T^(QVWF]2VY%FCT&S'
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBtF=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtiE(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtiF(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBitE()*1000))
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBFi='https://vapp.tmuyun.com/api/app_feature_switch/list'
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBFt='/api/app_feature_switch/list&&'+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.sid+'&&'+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBti+'&&'+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBtF+'&&FR*r!isE5W&&64'
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtiB=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBEFi(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBFt.encode()).hexdigest()
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtiF={"X-SESSION-ID":fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.sid,"X-REQUEST-ID":fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBti,"X-TIMESTAMP":fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBtF,"X-TENANT-ID":'64',"X-SIGNATURE":fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtiB}
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.headers.update(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtiF)
  r=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiFtB(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBFi,headers=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.headers)
  if 'success' not in r.text:
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt(r.text)
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.jmKey=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.oneKey1+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.ones2
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBitF(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBEiF(2,5))
 def fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCitBF(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF,fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEFit):
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.ones2="sdbedjmvnsiv"
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBti=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtiE(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBEti())
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.t1='T^(QVWF]2VY%FCT&S'
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBtF=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtiE(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtiF(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBitE()*1000))
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBFi='https://vapp.taizhou.com.cn/api/article/detail?id='+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtiE(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEFit)
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBFt='/api/article/detail&&'+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.sid+'&&'+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBti+'&&'+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBtF+'&&FR*r!isE5W&&64'
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtiB=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBEFi(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBFt.encode()).hexdigest()
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtiF={"X-SESSION-ID":fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.sid,"X-REQUEST-ID":fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBti,"X-TIMESTAMP":fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBtF,"X-TENANT-ID":'64',"X-SIGNATURE":fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtiB}
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.headers.update(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtiF)
  r=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiFtB(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBFi,headers=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.headers)
  if 'success' in r.text:
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('阅读文章成功！')
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCitFE(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEFit)
  else:
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('阅读文章失败！')
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.jmKey=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.oneKey1+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.ones2
 def fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCitFE(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF,fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEFit):
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCitFE=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBEiF(2000,5000)
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBitF(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCitFE/1000)
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.ones2="sdbedjmvnsiv"
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBti=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtiE(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBEti())
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.t1='T^(QVWF]2VY%FCT&S'
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBtF=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtiE(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtiF(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBitE()*1000))
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBFi='https://vapp.tmuyun.com/api/article/read_time?channel_article_id='+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtiE(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEFit)+'&is_end=true&read_time='+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtiE(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCitFE)
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBFt='/api/article/read_time&&'+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.sid+'&&'+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBti+'&&'+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBtF+'&&FR*r!isE5W&&64'
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtiB=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBEFi(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBFt.encode()).hexdigest()
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtiF={"X-SESSION-ID":fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.sid,"X-REQUEST-ID":fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBti,"X-TIMESTAMP":fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBtF,"X-TENANT-ID":'64',"X-SIGNATURE":fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtiB}
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.headers.update(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtiF)
  r=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiFtB(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBFi,headers=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.headers)
  if 'success' in r.text:
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('模拟阅读时长！',fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCitFE/1000,'s')
  else:
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('模拟阅读失败！',fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCitFE/1000,'s')
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.jmKey=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.oneKey1+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.ones2
 def fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCitFB(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF):
  u='https://xmt.taizhou.com.cn/prod-api/user-read/app/login?id='+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.aid+'&sessionId='+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.sid+'&deviceId='+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.deviceId
  r=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.sec.get(u)
  rj=r.json()
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.t4=']1P-T3BRV!%,.@WG_7&,PW%W7(B\'^'
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtBi=rj.get('data')
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBitF(1)
  if fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtBi:
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtBF=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtBi.get('needYz')
   if fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtBF==fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtFE:
    fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtFi=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtBi.get('yzm')
    ts=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtiE(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtiF(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBitE()*1000))
    ms='&&TlGFQAOlCIVxnKopQnW&&'+ts+'&&'+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtFi
    fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtFB=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCitEB(ms)
    uu=f'https://xmt.taizhou.com.cn/prod-api/user-read/yzmyz?signature='+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtFB+'&timestamp='+ts+'&yzm='+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtFi
    rr=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.sec.get(uu)
    if '加密错误' in rr.text:
     fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt(rr.text)
     try:
      import notify
      fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('加密错误')
      notify.send('望潮通知','加密错误，登录成失败，账号异常或者活动异常')
     except fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtEi as e:
      fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt(e)
      fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('推送消息失败')
     return fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtFi
    else:
     fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('登录成功1')
   else:
    fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('登录成功0')
  else:
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt(r.text)
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('登录成失败，账号ck失效或者活动异常')
   return fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtFi
 def fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiFEB(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF):
  u1='https://xmt.taizhou.com.cn/prod-api/user-read/list/'+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtiE(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFE("%Y%m%d"))
  r1=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.sec.get(u1)
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.t5='"2JR&U!]ZF*APDR^,"_)O^D *!76]U$V+]4,BYER.]%%'
  if '操作成功' in r1.text:
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('获取文章成功')
  else:
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('获取文章失败')
   return fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtFi
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEFiB=r1.json().get('data').get('articleIsReadList')
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBitF(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBEiF(2,4))
  for i in fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEFiB:
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('-'*50)
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEFit=i.get('id')
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEFBi=i.get('newsId')
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEFBt=i.get('title')
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEFti=i.get('isRead')
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('阅读文章',fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEFBt)
   if fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEFti==fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtFE:
    fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('文章:'+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEFBt+'阅读已完成')
    fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('再次阅读')
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBtF=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtiF(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBitE()*1000)
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtBi={'timestamp':fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEBtF,'articleId':fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEFit,'accountId':fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.aid}
   s=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCitEF(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEtBi)
   u2='https://xmt.taizhou.com.cn/prod-api/already-read/article/new?signature='+s
   r2=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.sec.get(u2)
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('阅读文章结果:',r2.text)
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCitBF(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEFBi)
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBitF(1)
 def fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiFEt(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF,input_string):
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEFtB=(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.jmKey*(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBFEi(input_string)//fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBFEi(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.jmKey)))+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.jmKey[:fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBFEi(input_string)%fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBFEi(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.jmKey)]
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiEBt=''.join(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBFEt(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBFiE(x)^fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBFiE(y))for x,y in fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBFit(input_string,fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEFtB))
  return fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiEBt
 def fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiFBE(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF):
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.sec.headers.update({'Referer':'https://srv-app.taizhou.com.cn/luckdraw/','Host':'srv-app.taizhou.com.cn'})
  u1='https://srv-app.taizhou.com.cn/tzrb/awardUpgrade/list?activityId=67'
  r1=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiFtB(u1)
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiEBF=r1.json()
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiEtB=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiEBF.get('data')
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiEtF={}
  for i in fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiEtB:
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiEtF.update({i.get('id'):i.get('title')})
  u2='https://srv-app.taizhou.com.cn/tzrb/user/loginWC?accountId='+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.aid+'&sessionId='+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.sid
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.sec.get(u2)
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBitF(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBEiF(2,4))
  u3='https://srv-app.taizhou.com.cn/tzrb/userAwardRecordUpgrade/saveUpdate'
  p='activityId=67&sessionId=undefined&sig=undefined&token=undefined'
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.sec.headers.update({'Content-type':'application/x-www-form-urlencoded'})
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiEFB=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.sec.post(u3,data=p)
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiEFt=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiEFB.json()
  if fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiEFt.get('code')==200:
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('抽奖结果:'+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiEtF.get(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiEFt.get("data")))
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiBEt='抽奖结果:'+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiEtF.get(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiEFt.get("data"))
  elif fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiEFt.get('code')==500:
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('抽奖结果:',fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiEFt.get('message'))
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiBEt='抽奖结果:'+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiEFt.get("message")
  else:
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiEFt)
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('未知结果')
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiBEt='未知结果'
  return fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.name+':'+fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiBEt+'\n'
 def fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiFBt(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF):
  if 'qmvxw' not in fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBFtE():
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('脚本被篡改，请前往https://t.me/yangmaoxz下载更新脚本0')
   return '脚本被篡改，请前往https://t.me/yangmaoxz下载更新脚本0'
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.sss='S\x0e\rTR_A\x08C\x00]Q\x14A\x02Q]Q_\x0cC\nCZEQ\x0b\x0f\x07R\n\x12'
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCitBE()
  if fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCitEB(qmvxw)!=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiFEt(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.sss):
   fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('脚本被篡改，请前往https://t.me/yangmaoxz下载更新脚本1')
   return '脚本被篡改，请前往https://t.me/yangmaoxz下载更新脚本1'
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.t3='NDV!U&_^N-2]G (_"V^N'
  if fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCitFB()==fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtFi:return fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.name+':'+'登录失败，账号ck失效，或者活动异常'
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiFEB()
  return fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCEitF.fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiFBE()
def fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiFtE():
 fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiBEF=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBEFt('wcread')
 if fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiBEF==fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtEF:
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('脚本变量参数不存在')
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBFti(0)
 try:
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiBEF=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiEF(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiBEF.replace("'",'"'))
  return fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiBEF
 except fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtEi as e:
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('变量参数填写有误:',e)
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('你填写的是:',fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiBEF)
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBFti(0)
if __name__=='__main__':
 fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiBtE=''
 fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiBFt()
 for fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiBtF in fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiFtE():
  sa=fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiBFE(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiBtF)
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiBtE+=sa.fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiFBt()
 fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt(fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiBtE)
 try:
  import notify
  notify.send('望潮推送',fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCiBtE)
 except fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBtEi as e:
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt(e)
  fYAkzlVRSqNMHLTOsXbvneGPxQWKocayUIgjmwdJpuhDrCBiFt('推送消息失败')
