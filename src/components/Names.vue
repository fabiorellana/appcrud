<template>
	<div class="names">
		<h2>App crud</h2>
		
		<!-- Formulario para el registro de personas -->
		<div class="card">
			<div class="card-header">
				Nuevo registro
			</div>
			<div class="card-body">
				<form>
					<div class="form-row">
						<div class="form-group col-md-4 mb-3">
							<label for="nombres">Nombres:</label>
							<input type="text" id="nombres" class="form-control" placeholder="Ej: Alan">
						</div>

						<div class="form-group col-md-4 mb-3">
							<label for="apellidos">Apellidos:</label>
							<input type="text" id="apellidos" class="form-control" placeholder="Ej: Brito">
						</div>

						<div class="form-group col-md-4 mb-3">
							<label for="nfecha">Fecha de Nacimiento:</label>
							<input type="date" id="nfecha" class="form-control">
						</div>
					</div>
					
					<div class="form-row">
						<div class="form-group col-md-6 mb-3">
							<label for="direccion">Direccion:</label>
							<input type="text" id="direccion" class="form-control" placeholder="Ej: xxxx">
						</div>

						<div class="form-group col-md-3 mb-3">
							<label for="telefono">Telefono:</label>
							<input type="text" id="telefono" class="form-control" placeholder="Ej: 123456789">
						</div>

						<div class="form-group col-md-3 mb-3">
							<label for="email">Email</label>
							<input type="email" id="email" class="form-control" placeholder="example@correo.cl">
						</div>
					</div>

					<div class="ml-auto text-left">
						<button type="submit" class="btn btn-primary">Agregar</button>
					</div>
				</form>
			</div>
		</div>

		<!-- Mostrar datos registrados a traves de una tabla -->
		<div class="card mt-5">
			<div class="card-header">
				Lista de datos
			</div>
			<div class="card-body">
				<div class="table-responsive">
					<table class="table table-striped">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Nombres</th>
								<th scope="col">Apellidos</th>
								<th scope="col">Fec. Nacimiento</th>
								<th scope="col">Direccion</th>
								<th scope="col">Telefono</th>
								<th scope="col">Email</th>
								<th scope="col">Acciones</th>
							</tr>
						</thead>
						<tbody>
							
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	h2{
		text-align: center;
		margin-top: 30px;
		margin-bottom: 20px;
	}
</style>