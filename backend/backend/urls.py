from django.contrib import admin
from django.urls import path
from testapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("json/farmers",views.farmer_json),
    path("json/companies",views.directcompanies_json),
    path("json/knrdealers",views.knrdealers_json),
]
