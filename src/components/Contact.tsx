"use client";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Contact() {
	return (
		<section
			id="contact"
			className="py-10 px-5 md:px-10 rounded-2xl shadow-md bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm transition-all"
		>
			<h3 className="text-lg font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-200 mb-3">
				Contact
			</h3>

			<p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
				Jika anda ingin berkolaborasi dalam proyek, berdiskusi tentang teknologi, atau sekadar terhubung, 
				jangan ragu untuk menghubungi saya melalui salah satu platform berikut:
			</p>

			<div className="flex flex-col gap-3">
				<a
					href="mailto:miraagustiansyah@gmail.com"
					className="flex items-center gap-3 text-zinc-800 dark:text-zinc-200 hover:text-pink-500 transition-all"
				>
					<FaEnvelope className="text-pink-500 text-xl" />
					<span className="text-base">miraagustiansyah@gmail.com</span>
				</a>

				<a
					href="https://wa.me/6282154560552"
					target="_blank"
					className="flex items-center gap-3 text-zinc-800 dark:text-zinc-200 hover:text-green-500 transition-all"
				>
					<FaWhatsapp className="text-green-500 text-xl" />
					<span className="text-base">+62 821-5456-0552</span>
				</a>

				<a
					href="https://www.linkedin.com/in/mira-agustiansyah"
					target="_blank"
					className="flex items-center gap-3 text-zinc-800 dark:text-zinc-200 hover:text-blue-500 transition-all"
				>
					<FaLinkedin className="text-blue-500 text-xl" />
					<span className="text-base">Mira Agustiansyah</span>
				</a>

				<a
					href="https://www.instagram.com/tiansyah68"
					target="_blank"
					className="flex items-center gap-3 text-zinc-800 dark:text-zinc-200 hover:text-pink-400 transition-all"
				>
					<FaInstagram className="text-pink-400 text-xl" />
					<span className="text-base">@tiansyah68</span>
				</a>

				<a
					href="https://www.youtube.com/manutd"
					target="_blank"
					className="flex items-center gap-3 text-zinc-800 dark:text-zinc-200 hover:text-red-500 transition-all"
				>
					<FaYoutube className="text-red-500 text-xl" />
					<span className="text-base">Mira Agustiansyah</span>
				</a>
			</div>
		</section>
	);
}
