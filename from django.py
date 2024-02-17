from django.urls import path
from . import views

urlpatterns = [
    path('request/an/id/',views.get_storage_id,name='get-storage-id'),
    path('upload/',views.storeFile,name='upload'),
    path('files/info/<str:sid>/',views.get_files_info,name='upload'),
    path('download/<str:sid>/<int:index>/',views.download,name='download'),
    path('delete/<str:sid>/<int:index>/',views.delete,name='delete'),
]
