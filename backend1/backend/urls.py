from django.contrib import admin
from django.urls import path, include
from graphene_django.views import GraphQLView
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('pages.urls')),
    path('PDF/', include('PDF.urls')),
    path('graphql/', GraphQLView.as_view(graphiql=settings.DEBUG))
]
