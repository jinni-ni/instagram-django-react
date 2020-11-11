from django.contrib import admin
from .models import User

# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass
    #list_display = ['username', 'email', 'website_url', 'is_active', 'is_staff', 'is_superuser']
