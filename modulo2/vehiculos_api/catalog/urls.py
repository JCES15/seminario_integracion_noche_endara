from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import MarcaViewSet, VehiculoViewSet

router = DefaultRouter()
router.register(r"marcas", MarcaViewSet, basename="marcas")
router.register(r"vehiculos", VehiculoViewSet, basename="vehiculos")




urlpatterns = [
 path(
'triangle/area/',
calcular_area_triangulo,
name='triangle-area'
),


]
urlpatterns += router.urls

