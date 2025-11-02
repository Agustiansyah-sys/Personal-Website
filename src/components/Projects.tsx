import Image from 'next/image';

export default function Projects() {
	return (
		<section id="projects" className="space-y-10 px-4 md:px-8 py-10">
			<h3 className="text-sm uppercase tracking-wide font-medium text-zinc-500 dark:text-zinc-300">
				Projects
			</h3>

			{/* === Project 1 === */}
			<div className="flex flex-col gap-y-4 items-start">
				<div className="flex flex-col w-full gap-4">
					<Image
						src="/gambar 1.jpg"
						alt="Pemesanan Makanan 1"
						className="w-full aspect-video rounded-3xl object-cover"
						width={400}
						height={250}
					/>
					<Image
						src="/gambar 2.jpg"
						alt="Pemesanan Makanan 2"
						className="w-full aspect-video rounded-3xl object-cover"
						width={400}
						height={250}
					/>
				</div>
				<div className="w-full">
					<h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">
						Website Pemesanan Makanan
					</h4>
					<p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
						Aplikasi ini merupakan platform pemesanan makanan online
						yang memudahkan konsumen untuk melihat menu, memanfaatkan promo,
						dan melakukan pemesanan secara cepat. Dashboard admin menyediakan
						fitur kelola user, kategori menu, kelola menu, data pesanan, dan laporan,
						sedangkan dashboard konsumen menampilkan sapaan personal, waktu dan tanggal,
						keterangan promo, serta tombol untuk melihat menu dan memulai pemesanan.
					</p>
					<div className="flex flex-wrap items-center gap-2 mt-3">
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">Pemesanan</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">Dashboard</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">Promo</span>
					</div>
				</div>
			</div>

			{/* === Project 2 === */}
			<div className="flex flex-col gap-y-4 items-start">
				<div className="flex flex-col w-full gap-4">
					<Image
						src="/gambar 3.jpg"
						alt="Fakta Menarik 1"
						className="w-full aspect-video rounded-3xl object-cover"
						width={400}
						height={250}
					/>
					<Image
						src="/gambar 4.jpg"
						alt="Fakta Menarik 2"
						className="w-full aspect-video rounded-3xl object-cover"
						width={400}
						height={250}
					/>
				</div>
				<div className="w-full">
					<h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">
						Website Fakta Menarik
					</h4>
					<p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
						TianFact adalah website yang menyajikan fakta menarik di dunia secara interaktif. 
						Dashboard admin menyediakan fitur kelola fakta, kelola kategori, dan kelola komentar, 
						sementara pengguna dapat menjelajahi fakta-fakta unik dan memberikan komentar untuk berdiskusi.
					</p>
					<div className="flex flex-wrap items-center gap-2 mt-3">
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">Fakta</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">Komentar</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">Kategori</span>
					</div>
				</div>
			</div>
		</section>
	);
}
