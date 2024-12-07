from django.contrib import admin
from django.urls import path, include

from Dogovornitsa.apps import contracts

urlpatterns = [
    path('admin/', admin.site.urls),
    path('contracts/', include('contracts.urls')),
    path('', include('pages.urls')),
]
