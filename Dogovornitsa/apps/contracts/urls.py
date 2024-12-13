from django.urls import path
from .views import participants_add, participants_list, participants_delete


urlpatterns = [
    path('participants-add', participants_add, name='participants-add'),
    path('participants-list', participants_list, name='participants-list'),
    path('participants/delete/<int:participant_id>/', participants_delete, name='participants_delete'),
]
