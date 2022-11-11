from django.contrib import admin
from django.urls import path
from ninja import NinjaAPI 
from   .api import router
from yunlan.router import yunlan_router


api = NinjaAPI()

api.add_router("/",yunlan_router) 
api.add_router("/",router,tags=["backend"]) 


urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/",api.urls)
]