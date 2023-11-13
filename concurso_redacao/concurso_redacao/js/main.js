$(window).on('load', function () {

    var me = this;

    this.iptAlunoFone = $('input#telefone_responsavel');
    this.iptInstituicaoFone = $('input#telefone_instituicao');
    this.iptCpfAluno = $('input#cpf_aluno');
    this.iptCpfProfessor = $('input#cpf_professor');
    this.iptDataNascimento = $('input#data_nascimento_aluno');


    this.iptAlunoFone.add(this.iptInstituicaoFone).mask('(00) 0 0000-0000');
    this.iptCpfAluno.add(this.iptCpfProfessor).mask('000.000.000-00');
    this.iptDataNascimento.mask('00/00/0000');

    $('.lista-menu__link').click(function (e) {

        e.preventDefault();

        var href = $(this).attr('href');

        var elem = $(href);
        var top = elem.offset().top;

        $('body, html').animate({ scrollTop: (top + 'px') }, 'fast');
    });

});