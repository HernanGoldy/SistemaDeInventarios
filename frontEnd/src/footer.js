document.getElementById("idfooter").innerHTML = `
<footer class="footer_group">
    <div class="footer_container">
        <div class="columns_container">
            <div class="column-1 all_networks">
                <p class="networks-info">Si deseas obtener más información sobre nuestros productos y servicios, puedes visitarnos o seguirnos en nuestras redes.</p>
                <ul class="networks-icons">
                    <li class="column_item_1"><a href="#" title="Twitter"><i class="fa fa-twitter list-icons"></i></a></li>
                    <li class="column_item_1"><a href="#" title="Telegram"><i class="fab fa-telegram-plane list-icons"></i></a></li>
                    <li class="column_item_1"><a href="#" title="Facebook"><i class="fa fa-facebook list-icons"></i></a></li>
                    <li class="column_item_1"><a href="#" title="Instagram"><i class="fa fa-instagram list-icons"></i></a></li>
                    <li class="column_item_1"><a href="#" title="Pinterest"><i class="fa fa-pinterest list-icons"></i></a></li>
                    <li class="column_item_1"><a href="#" title="Vimeo"><i class="fa fa-vimeo list-icons"></i></a></li>
                </ul>
            </div>

            <div class="column-2 all_hours">
                <h6 class="column_title">Horarios</h6>
                <ul>
                    <li class="column_item_2"><i class="far fa-clock hour_icon"></i>&ensp;Lun. a Jue.<br>De 17:00 Hs. a 00:00 Hs.</li>
                    <li class="column_item_2"><i class="far fa-clock hour_icon"></i>&ensp;Vie. a Dom. y Feriados<br>De 10:00 Hs. a 03:00 Hs.</li>
                </ul>
            </div>

            <div class="column-3 all_contacts">
                <h6 class="column_title">Encuéntranos</h6>
                <ul>
                    <li class="column_item_3"><i class="fas fa-map-marker-alt list-icons"></i>&ensp; Armenia Nro. 1.733 - CABA</li>
                    <li class="column_item_3"><i class="fas fa-phone list-icons"></i>&ensp;(+54) 9 11 2345-6789 / 9876</li>
                    <li class="column_item_3"><i class="fab fa-whatsapp list-icons"></i>&ensp;(+54) 9 11 98765432</li>
                    <li class="column_item_3"><i class="far fa-envelope list-icons"></i>&ensp;contacto@lapalanca.com</li>
                </ul>
            </div>

            <div class="column-4 all_news">
                <h6 class="column_title">Novedades</h6>
                <p class="news-info">Suscríbete a nuestro boletín para enterarte de las novedades y ofertas antes que nadie.</p>
                <div>
                    <div>
                        <input class="enter_email" type="email" placeholder="Ingresa tu correo electrónico">
                        <div>
                            <button class="button-email" id="button-email" type="submit">
                                <i class="fas fa-envelope list-icons icon-send"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="copyright"  >
        <div class="copyright_container">
            <p>© 2021 La Palanca - Todos los derechos reservados.</p>
        </div>
    </div>
</footer>
`