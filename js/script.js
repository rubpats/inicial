function TestController($scope) {
    $scope.questions = [
        {
            id : 1,
            text:'1.- Los cambios tienen un impacto directo en los modelos de negocio, para que esos modelos contin\u00faen d\u00e1ndole a una empresa una ventaja competitiva, que debe hacer la empresa?',
            validAnswer : 3,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Debe cambiar, debe ser innovadora.'},
                {id : 2, text : 'Debe cambiar de negocio totalmente.'},
                {id : 3, text : 'Debe cambiar, debe ser din\u00e1mica.'},
                {id : 4, text : 'Debe cambiar, debe ser tecnol\u00f3gica.'}
            ]
        },
		{
            id : 2,
            text:'2.- Para formular y ejecutar los modelos de negocio de cara a un cambio tecnol\u00f3gico, que se debe entender primero?',
            validAnswer : 4,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Los precios a los que se vendera el producto.'},
                {id : 2, text : 'Las ganancias proyectadas.'},
                {id : 3, text : 'El costo de la tecnolog\u00eda.'},
                {id : 4, text : 'Lo que se necesita para ganar dinero con el cambio tecnol\u00f3gico.'}
            ]
        },
		{
            id : 3,
            text:'3.- Seg\u00fan David Teece que cosas determinan el grado en que una empresa puede beneficiarse de su invenci\u00f3n o tecnolog\u00eda?',
            validAnswer : 1,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Imitabilidad y Activos Complementarios.'},
                {id : 2, text : 'Version de la tecnologia duracion de Patente.'},
                {id : 3, text : 'Garantia de la tecnologia y Soporte.'},
                {id : 4, text : 'Inversi\u00f3n y Depresiaci\u00f3n.'}
            ]
        },
		{
            id : 4,
            text:'4.- Que son los Activos Complementarios (en general)?',
            validAnswer : 2,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Los productos que se venden por separado.'},
                {id : 2, text : 'Todas las otras capacidades (aparte de las que se basa la tecnolog\u00eda o invenci\u00f3n) que la empresa tiene para explotar la tecnolog\u00eda.'},
                {id : 3, text : 'Los servicios post-venta.'},
                {id : 4, text : 'Soporte T\u00e9cnico.'}
            ]
        },
		{
            id : 5,
            text:'5.- Definimos activos complementarios de una empresa por encima de todos los dem\u00e1s tal como _______ aparte de las que se basa la tecnolog\u00eda o invenci\u00f3n, que la empresa necesita para explotar una tecnolog\u00eda',
            validAnswer : 2,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Insumos.'},
                {id : 2, text : 'Capacidades.'},
                {id : 3, text : 'Entradas.'},
                {id : 4, text : 'Inversi\u00f3n.'}
            ]
        },
		{
            id : 6,
            text:'6.- Los activos complementarios que hacen una contribuci\u00f3n inusualmente alto para el valor que perciben los clientes son m\u00e1s propensos a generar a la empresa un _____. ',
            validAnswer : 3,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Ingreso Bajo.'},
                {id : 2, text : 'Costo Alto.'},
                {id : 3, text : 'Beneficio de cambio tecnol\u00f3gico.'},
                {id : 4, text : 'Sentido de Identidad.'}
            ]
        },
		{
            id : 7,
            text:'7.- Un modelo de negocio puede ser conceptualizada como una asignaci\u00f3n de capacidades en los tres componentes del modelo de negocios para el cliente, cuales son?',
            validAnswer : 3,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'valor, reputaci\u00f3n y alcance.'},
                {id : 2, text : 'valor, posicionamiento y ventaja competitiva.'},
                {id : 3, text : 'valor, alcance y posicionamiento.'},
                {id : 4, text : 'posicionamiento, alcance y reputaci\u00f3n.'}
            ]
        },
		{
            id : 8,
            text:'8.- Permite a una empresa ofrecer a sus clientes productos/servicios de menor costo que sus competidores y ayudar a la posici\u00f3n de la empresa frente a sus rivales y posibles nuevos participantes.',
            validAnswer : 4,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Economias de Escala.'},
                {id : 2, text : 'Promociones de lealtad.'},
                {id : 3, text : 'Inovacion a bajo costo.'},
                {id : 4, text : 'Capacidades de bajo costo.'}
            ]
        },
		{
            id : 9,
            text:'9.- Sostiene que el tipo de empresa que es probable que explote un cambio tecnol\u00f3gico esta en funci\u00f3n del tipo de cambio.',
            validAnswer : 2,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Modelo de Transformacion Digital.'},
                {id : 2, text : 'Modelo de Cambio Radical / Incremental.'},
                {id : 3, text : 'Modelo de Cambio Tecnologico.'},
                {id : 4, text : 'Modelo de Cambio Disruptivo.'}
            ]
        },
		{
            id : 10,
            text:'10.- Si las capacidades para el desarrollo de la nueva tecnolog\u00eda son muy diferentes de los ya existentes, se dice que el cambio es:',
            validAnswer : 3,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Radical en el sentido econ\u00f3mico.'},
                {id : 2, text : 'Radical en el sentido de Tecnol\u00f3gico, o destrucci\u00f3n de competencia.'},
                {id : 3, text : 'Radical en el sentido de Organizaci\u00f3n, o destrucci\u00f3n de competencia. '},
                {id : 4, text : 'De Innovaci\u00f3n incremental en el sentido econ\u00f3mico.'}
            ]
        },
		{
            id : 11,
            text:'11.- Un cambio de arquitectura es uno que requiere:',
            validAnswer : 3,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Conocimientos Generales de los v\u00ednculos entre componentes. '},
                {id : 2, text : 'Diferentes conocimientos de los componentes utilizados. '},
                {id : 3, text : 'Diferentes conocimientos de los v\u00ednculos entre componentes. '},
                {id : 4, text : 'Diferentes componentes utilizados que vinculados generan valor al cliente. '}
            ]
        },
		{
            id : 12,
            text:'12.- Una caracteristica de Las Tecnolog\u00edas disruptivas:',
            validAnswer : 1,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'El nuevo producto o servicio de la nueva tecnolog\u00eda cuestan menos que los productos o servicios existentes de la vieja tecnolog\u00eda.'},
                {id : 2, text : 'El nuevo producto o servicio de la nueva tecnolog\u00eda es la punta de lanza mercadologicamente hablando.'},
                {id : 3, text : 'El nuevo producto o servicio de la nueva tecnolog\u00eda cuestan menos que los productos o servicios existentes de los competidores.'},
                {id : 4, text : 'El nuevo producto o servicio de la nueva tecnolog\u00eda cuestan mas que los productos o servicios existentes de los competidores pero solo al principio.'}
            ]
        },
		
        
    ];

    $scope.userStatus = '';

    $scope.validAnswers = 0;

    $scope.validate = function (question) {
        if (question.validAnswer == question.userAnswer) {
            $scope.validAnswers ++;
            question.status = 'ok';
        } else {
            if (question.status == 'ok' && $scope.validAnswers > 0) {
                $scope.validAnswers --;
            }
            question.status = 'error';
        }

        updateUserStatus();
    };

    function updateUserStatus() {
        var avgValidAnswers = ($scope.validAnswers / $scope.questions.length) * 100;
        if (avgValidAnswers == 0) {
            $scope.userStatus = 'looser';
        } else if (avgValidAnswers == 100) {
            $scope.userStatus = 'guru';
        } else {
            $scope.userStatus = 'poor';
        }
    }

}