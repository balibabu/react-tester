from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse
import time

store={}

@api_view(['GET'])
def get_storage_id(request):
    new_id=str(hash(time.time()))
    store[new_id]=[]
    return Response({'id':new_id})

@api_view(['POST'])
def storeFile(request):
    file = request.FILES.get('file')
    _id=request.data.get('id')
    if(_id):
        store[_id].append((file.read(),file.name,file.size))
        return Response('ok')
    return Response({'message':'please provide the registered id'},status=403)


@api_view(['GET'])
def get_files_info(request,sid):
    filesInfo=[]
    if sid in store:
        for file in store[sid]:
            filesInfo.append({'title':file[1],'size':file[2]})
        return Response(filesInfo)
    return Response({'message':'please provide the registered id'},status=403)

@api_view(['GET'])
def download(request,sid,index):
    if sid in store:
        if index<len(store[sid]):
            response = HttpResponse(store[sid][index][0],content_type='application/octet-stream')
            response['Content-Disposition'] = store[sid][index][1]
            response['Access-Control-Expose-Headers'] = 'Content-Disposition'
            return response
    return Response('please provide valid id')

@api_view(['GET'])
def delete(request,sid,index):
    if sid in store:
        if index<len(store[sid]):
            del store[sid][index]
            return Response('ok')
    return Response('please provide valid id')


