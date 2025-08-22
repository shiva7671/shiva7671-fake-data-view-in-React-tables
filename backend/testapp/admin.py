from django.contrib import admin
from testapp.models import Farmer,DirectCompanies,KnrDealers



class FarmerAdmin(admin.ModelAdmin):
    list_display=("name","mobile","address","date","productName","totalBill")
admin.site.register(Farmer,FarmerAdmin)

class DirectCompaniesAdmin(admin.ModelAdmin):
    list_display=("companyname","dealerName","dealerMobile","address","creditLimit","usedLimit","paidLimit","availableLimit")
admin.site.register(DirectCompanies,DirectCompaniesAdmin)


class KnrDealersAdmin(admin.ModelAdmin):
    list_display=("shopname","dealerName","dealerMobile","shopAddress","creditLimit","usedLimit","paidLimit","availableLimit")
admin.site.register(KnrDealers,KnrDealersAdmin)